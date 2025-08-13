'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Save, ArrowLeft, Plus, X, LogOut } from 'lucide-react'
import Link from 'next/link'
import LoginComponent from '@/app/components/LoginComponent'

const categories = [
  'Game Development',
  'Web Development',
  'Mobile Development',
  'UI/UX Design',
  'Cloud & DevOps',
  'Technology',
  'Tutorial',
  'Industry News'
]

export default function AdminBlogPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [checkingAuth, setCheckingAuth] = useState(true)
  
  const [formData, setFormData] = useState({
    title: '',
    // // meta_title: '',
    meta_description: '',
    author: '',
    category: '',
    meta_tags: [] as string[],
    // thumbnail: [],
    image: '', // thumbnail image URL
    custom_url: '', // optional custom URL
    thumbnail: '' // featured image as base64
  })

  const [contentBlocks, setContentBlocks] = useState([
    { id: Date.now(), paragraph: '', image: '' }
  ])

  const [newTag, setNewTag] = useState('')

  // Check authentication on page load
  useEffect(() => {
    checkAuthentication()
  }, [])

  const checkAuthentication = async () => {
    try {
      const response = await fetch('/api/auth')
      if (response.ok) {
        setIsAuthenticated(true)
      } else {
        setIsAuthenticated(false)
      }
    } catch (error) {
      console.error('Auth check error:', error)
      setIsAuthenticated(false)
    } finally {
      setCheckingAuth(false)
    }
  }

  const handleLoginSuccess = () => {
    setIsAuthenticated(true)
    setCheckingAuth(false)
  }

  const handleLogout = async () => {
    try {
      await fetch('/api/auth', { method: 'DELETE' })
      setIsAuthenticated(false)
      router.push('/')
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  // Show loading while checking auth
  if (checkingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="text-white text-center">
          <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
          <p>Checking authentication...</p>
        </div>
      </div>
    )
  }

  // Show login if not authenticated
  if (!isAuthenticated) {
    return <LoginComponent onLoginSuccess={handleLoginSuccess} />
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  // Process custom URL for preview and final submission
  const processCustomUrl = (url: string) => {
    return url
      .toLowerCase()
      .trim() // Remove leading/trailing whitespace
      .replace(/\s+/g, '-') // Replace spaces with dashes
      .replace(/[^a-z0-9-]/g, '') // Remove special characters except dashes
      .replace(/-+/g, '-') // Replace multiple consecutive dashes with single dash
      .replace(/^-|-$/g, '') // Remove leading and trailing dashes
  }

  const addTag = () => {
    if (newTag.trim() && !formData.meta_tags.includes(newTag.trim())) {
      setFormData(prev => ({
        ...prev,
        meta_tags: [...prev.meta_tags, newTag.trim()]
      }))
      setNewTag('')
    }
  }

  const removeTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      meta_tags: prev.meta_tags.filter(tag => tag !== tagToRemove)
    }))
  }

  // Content block management functions
  const addContentBlock = () => {
    const newBlock = {
      id: Date.now(),
      paragraph: '',
      image: ''
    }
    setContentBlocks(prev => [...prev, newBlock])
  }

  const removeContentBlock = (id: number) => {
    if (contentBlocks.length > 1) {
      setContentBlocks(prev => prev.filter(block => block.id !== id))
    }
  }

  const updateContentBlock = (id: number, field: 'paragraph' | 'image', value: string) => {
    setContentBlocks(prev => 
      prev.map(block => 
        block.id === id ? { ...block, [field]: value } : block
      )
    )
  }

  // Handle file upload and convert to base64
  const handleImageUpload = async (id: number, file: File) => {
    if (!file) return
    
    // Validate file type
    if (!file.type.startsWith('image/')) {
      setMessage({ type: 'error', text: 'Please select a valid image file' })
      return
    }
    
    // Validate file size (limit to 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setMessage({ type: 'error', text: 'Image size should be less than 5MB' })
      return
    }
    
    try {
      const base64 = await convertFileToBase64(file)
      updateContentBlock(id, 'image', base64)
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to process image' })
    }
  }

  // Convert file to base64
  const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = reject
      reader.readAsDataURL(file)
    })
  }

  // Handle featured image upload
  const handleFeaturedImageUpload = async (file: File) => {
    if (!file) return
    
    // Validate file type
    if (!file.type.startsWith('image/')) {
      setMessage({ type: 'error', text: 'Please select a valid image file for featured image' })
      return
    }
    
    // Validate file size (limit to 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setMessage({ type: 'error', text: 'Featured image size should be less than 5MB' })
      return
    }
    
    try {
      const base64 = await convertFileToBase64(file)
      setFormData(prev => ({
        ...prev,
        thumbnail: base64
      }))
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to process featured image' })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.title || !formData.meta_description || !formData.author || !formData.category) {
      setMessage({ type: 'error', text: 'Please fill in all required fields' })
      return
    }

    if (!formData.thumbnail) {
      setMessage({ type: 'error', text: 'Please upload a featured image' })
      return
    }

    // Validate that at least one content block has content
    const hasContent = contentBlocks.some(block => block.paragraph.trim() || block.image)
    if (!hasContent) {
      setMessage({ type: 'error', text: 'Please add at least one paragraph or image to your content blocks' })
      return
    }

    setLoading(true)
    setMessage(null)

    try {
      const response = await fetch('/api/add-blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          custom_url: formData.custom_url ? processCustomUrl(formData.custom_url) : '',
          content: contentBlocks.map(block => ({
            paragraph: block.paragraph,
            image: block.image
          }))
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to create blog post')
      }

      const result = await response.json()
      setMessage({ type: 'success', text: 'Blog post created successfully!' })
      
      // Reset form
      setFormData({
        title: '',
        // meta_title: '',
        meta_description: '',
        author: '',
        category: '',
        meta_tags: [],
        // thumbnail: [],
        image: '',
        custom_url: '',
        thumbnail: ''
      })

      // Reset content blocks
      setContentBlocks([{ id: Date.now(), paragraph: '', image: '' }])

      // Redirect to the new blog post after a delay
      setTimeout(() => {
        if (result.slug) {
          router.push(`/blog/${result.slug}`)
        } else {
          router.push('/blog')
        }
      }, 2000)

    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: error instanceof Error ? error.message : 'Failed to create blog post' 
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className=" text-white min-h-screen ">
     
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <Link 
              href="/blog"
              className="inline-flex items-center text-magenta-400 hover:text-magenta-300 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>

            <button
              onClick={handleLogout}
              className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </button>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 p-2 bg-purple-400 bg-clip-text text-transparent">
            Create New Blog Post
          </h1>
          
          <p className="text-xl text-gray-300 mb-12">
            Add a new blog post to share insights and knowledge with your audience.
          </p>

          {message && (
            <div className={`p-4 rounded-lg mb-6 ${
              message.type === 'success' 
                ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                : 'bg-red-500/20 text-red-400 border border-red-500/30'
            }`}>
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-lg font-semibold mb-2">
                Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-magenta-500 focus:outline-none"
                placeholder="Enter blog post title"
              />
            </div>

            {/* <div>
              <label htmlFor="url_title" className="block text-lg font-semibold mb-2">
                URL Title *
              </label>
              <input
                type="text"
                id="meta_title"
                name="meta_title"
                value={formData.meta_title}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-magenta-500 focus:outline-none"
                placeholder="Enter blog meta title"
              />
            </div> */}

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-lg font-semibold mb-2">
                Short Description *
              </label>
              <textarea
                id="meta_description"
                name="meta_description"
                value={formData.meta_description}
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-magenta-500 focus:outline-none resize-vertical"
                placeholder="Brief description of the blog post"
              />
            </div>

            {/* Content */}
            {/* <div>
              <label htmlFor="content" className="block text-lg font-semibold mb-2">
                Content
              </label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                rows={10}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-magenta-500 focus:outline-none resize-vertical"
                placeholder="Write your blog post content here..."
              />
            </div> */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Author */}
              <div>
                <label htmlFor="author" className="block text-lg font-semibold mb-2">
                  Author *
                </label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  value={formData.author}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-magenta-500 focus:outline-none"
                  placeholder="Author name"
                />
              </div>

              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-lg font-semibold mb-2">
                  Category *
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:border-magenta-500 focus:outline-none"
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Tags */}
            <div>
              <label className="block text-lg font-semibold mb-2">
                Tags
              </label>
              <div className="space-y-3">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                    className="flex-1 px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-magenta-500 focus:outline-none"
                    placeholder="Add a tag"
                  />
                  <button
                    type="button"
                    onClick={addTag}
                    className="px-4 py-3 bg-magenta-500 hover:bg-magenta-600 text-white rounded-lg transition-colors flex items-center"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                
                {formData.meta_tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {formData.meta_tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
                      >
                        {tag}
                        <button
                          type="button"
                          onClick={() => removeTag(tag)}
                          className="ml-2 text-gray-400 hover:text-white"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Image URL */}
            {/* <div>
              <label htmlFor="image" className="block text-lg font-semibold mb-2">
                Thumbnail Image URL
              </label>
              <input
                type="url"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-magenta-500 focus:outline-none"
                placeholder="https://example.com/thumbnail.jpg"
              />
            </div> */}

            {/* Featured Image Upload */}
            <div>
              <label className="block text-lg font-semibold mb-2">
                Featured Image *
                <span className="text-sm text-gray-400 font-normal ml-2">
                  (This will be used as the main thumbnail in blog listings)
                </span>
              </label>
              <div className="space-y-3">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0]
                    if (file) {
                      handleFeaturedImageUpload(file)
                    }
                  }}
                  className="block w-full text-sm text-gray-400 file:mr-4 file:py-3 file:px-6 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-gradient-to-r file:from-magenta-500 file:to-purple-600 file:text-white hover:file:from-magenta-600 hover:file:to-purple-700 transition-all"
                />
                {formData.thumbnail && (
                  <div className="relative inline-block">
                    <img
                      src={formData.thumbnail}
                      alt="Featured image preview"
                      className="max-w-sm max-h-48 object-cover rounded-lg border border-gray-600"
                    />
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, thumbnail: '' }))}
                      className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Custom URL */}
            <div>
              <label htmlFor="custom_url" className="block text-lg font-semibold mb-2">
                Custom URL (Optional)
                {/* <span className="text-sm text-gray-400 font-normal ml-2">
                  (Leave empty to auto-generate from title)
                </span> */}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                  /blog/
                </div>
                <input
                  type="text"
                  id="custom_url"
                  name="custom_url"
                  value={formData.custom_url}
                  onChange={handleInputChange}
                  className="w-full pl-16 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-magenta-500 focus:outline-none"
                  placeholder="my-custom-blog-url"
                />
              </div>
              {formData.custom_url && (
                <p className="text-sm text-gray-400 mt-2">
                  Blog will be available at: <span className="text-cyan-400">/blog/{processCustomUrl(formData.custom_url)}</span>
                </p>
              )}
            </div>

            {/* Dynamic Content Blocks */}
            <div className="space-y-6">
              
              
              {contentBlocks.map((block, index) => (
                <div key={block.id} className="bg-gray-900/30 border border-gray-700 rounded-lg p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-gray-300">Content Block {index + 1}</h3>
                    {contentBlocks.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeContentBlock(block.id)}
                        className="text-red-400 hover:text-red-300 transition-colors"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    )}
                  </div>
                  
                  {/* Paragraph Textarea */}
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Paragraph
                    </label>
                    <textarea
                      value={block.paragraph}
                      onChange={(e) => updateContentBlock(block.id, 'paragraph', e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-magenta-500 focus:outline-none resize-vertical"
                      placeholder="Write your paragraph content here..."
                    />
                  </div>
                  
                  {/* Image Upload */}
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Image
                    </label>
                    <div className="space-y-3">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0]
                          if (file) {
                            handleImageUpload(block.id, file)
                          }
                        }}
                        className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-magenta-500 file:text-white hover:file:bg-magenta-600"
                      />
                      {block.image && (
                        <div className="relative">
                          <img
                            src={block.image}
                            alt={`Content block ${index + 1}`}
                            className="max-w-xs max-h-48 object-cover rounded-lg border border-gray-600"
                          />
                          <button
                            type="button"
                            onClick={() => updateContentBlock(block.id, 'image', '')}
                            className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 transition-colors"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Blog Content</h2>
                <button
                  type="button"
                  onClick={addContentBlock}
                  className="flex items-center px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors text-sm"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Content Block
                </button>
              </div>

            </div>

            {/* Featured */}
            {/* <div className="flex items-center">
              <input
                type="checkbox"
                id="featured"
                name="featured"
                checked={formData.featured}
                onChange={handleInputChange}
                className="mr-3 h-5 w-5 text-magenta-500 bg-gray-900 border-gray-700 rounded focus:ring-magenta-500"
              />
              <label htmlFor="featured" className="text-lg font-semibold">
                Featured Post
              </label>
            </div> */}

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={loading}
                className="w-full md:w-auto flex items-center justify-center px-8 py-4 bg-gradient-to-r from-magenta-500 to-purple-600 hover:from-magenta-600 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Creating...
                  </>
                ) : (
                  <>
                    <Save className="h-5 w-5 mr-2" />
                    Create Blog Post
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

"use client"

import { useState, useEffect } from 'react'
import { ContactSubmission } from '../../../db/schema'

export default function ContactSubmissionsAdmin() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchSubmissions()
  }, [])

  const fetchSubmissions = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/contact/list')
      const data = await response.json()
      
      if (response.ok) {
        setSubmissions(data.submissions)
      } else {
        setError(data.error || 'Failed to fetch submissions')
      }
    } catch (err) {
      setError('Network error occurred')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Contact Submissions Admin</h1>
          <div className="text-center">Loading...</div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Contact Submissions Admin</h1>
          <div className="text-red-400">Error: {error}</div>
          <button 
            onClick={fetchSubmissions}
            className="mt-4 bg-magenta-500 hover:bg-magenta-600 text-white px-4 py-2 rounded"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Contact Submissions Admin</h1>
        
        <div className="mb-4">
          <p className="text-gray-300">Total submissions: {submissions.length}</p>
          <button 
            onClick={fetchSubmissions}
            className="mt-2 bg-magenta-500 hover:bg-magenta-600 text-white px-4 py-2 rounded"
          >
            Refresh
          </button>
        </div>

        {submissions.length === 0 ? (
          <div className="text-center text-gray-400 py-8">
            No contact submissions found. Try submitting a test form.
          </div>
        ) : (
          <div className="grid gap-6">
            {submissions.map((submission) => (
              <div key={submission.id} className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-magenta-400">
                      {submission.firstName} {submission.lastName}
                    </h3>
                    <p className="text-gray-300">{submission.email}</p>
                    {submission.phone && (
                      <p className="text-gray-300">{submission.phone}</p>
                    )}
                    {submission.company && (
                      <p className="text-gray-300">Company: {submission.company}</p>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-400">
                      Submitted: {new Date(submission.submittedAt).toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-400">
                      ID: {submission.id}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="text-sm text-gray-400">Service:</span>
                    <p className="text-white">{submission.service}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-400">Budget:</span>
                    <p className="text-white">{submission.budget}</p>
                  </div>
                </div>
                
                <div>
                  <span className="text-sm text-gray-400">Description:</span>
                  <p className="text-white mt-1">{submission.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

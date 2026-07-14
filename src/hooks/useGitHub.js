import { useEffect, useState } from 'react'

export function useGitHub(username) {
  const [data, setData] = useState(null)
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchGitHub() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`),
        ])

        if (!userRes.ok) throw new Error('Failed to fetch GitHub data')

        const userData = await userRes.json()
        const reposData = reposRes.ok ? await reposRes.json() : []

        setData(userData)
        setRepos(reposData)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    if (username) fetchGitHub()
  }, [username])

  return { data, repos, loading, error }
}

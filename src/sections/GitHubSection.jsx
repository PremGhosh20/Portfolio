import { Star, GitFork, Users, ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import Reveal from '../components/ui/Reveal'
import { SITE_CONFIG } from '../constants'
import { useGitHub } from '../hooks/useGitHub'

export default function GitHubSection() {
  const { data, repos, loading, error } = useGitHub(SITE_CONFIG.githubUsername)

  if (loading) return null

  const hasData = data && !error && repos.length > 0
  if (!hasData) return null

  return (
    <section id="github" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading
            label="Open Source"
            title="GitHub Activity"
            subtitle="Repositories and open source contributions."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="github-stats">
            {[
              { icon: GitFork, label: 'Repos', value: data.public_repos },
              { icon: Users, label: 'Followers', value: data.followers },
              { icon: Users, label: 'Following', value: data.following },
              { icon: Star, label: 'Gists', value: data.public_gists },
            ].map((s) => (
              <div key={s.label} className="github-stat card--hover">
                <s.icon size={18} style={{ color: 'var(--primary)', margin: '0 auto 0.5rem' }} />
                <div className="stat-float-val" style={{ fontSize: '1.25rem' }}>{s.value}</div>
                <div className="stat-float-label">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="github-repos">
          {repos.map((repo, i) => (
            <Reveal key={repo.id} delay={i * 0.05}>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="card card-pad card--hover card--glow"
                style={{ display: 'block', textDecoration: 'none', color: 'inherit', height: '100%' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <h3 style={{ fontWeight: 600, color: 'var(--text)', fontSize: '1rem' }}>{repo.name}</h3>
                  <ExternalLink size={14} style={{ color: 'var(--muted)', flexShrink: 0 }} />
                </div>
                <p className="t-muted" style={{ fontSize: '0.875rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {repo.description || 'No description'}
                </p>
                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border)', fontSize: '0.8125rem', color: 'var(--muted)' }}>
                  {repo.language && <span>{repo.language}</span>}
                  <span>★ {repo.stargazers_count}</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Button variant="outline" href={`https://github.com/${SITE_CONFIG.githubUsername}`} target="_blank" rel="noopener noreferrer">
              <FaGithub size={16} /> View All Repositories
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

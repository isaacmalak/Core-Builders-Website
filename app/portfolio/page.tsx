import { PortfolioPage as PortfolioPageContent } from '@/app/portfolio/portfolio-page'
import { RouteTransition } from '@/components/route-transition'

export { portfolioPageMetadata as metadata } from './metadata'

export default function PortfolioPage() {
  return (
    <RouteTransition key="portfolio">
      <PortfolioPageContent />
    </RouteTransition>
  )
}

import { Icons } from "../components/icons"
import Info from "../components/info"
import { buttonVariants } from "../components/ui/button"
import { useGetCompanyQuery } from "../redux/services/spacex"

export default function Home() {
  const { data, isError, isLoading } = useGetCompanyQuery()
  if (isLoading) return <div>Loading...</div>
  if (isError || !data) return <div>There was an error</div>
  return (
    <div className="grid min-h-screen items-center bg-home-mobile bg-cover pt-20 sm:pt-28 md:bg-home-tablet lg:bg-home-desktop lg:pt-32">
      <div className="container">
        <section className="flex max-w-3xl flex-col items-center gap-3 text-center sm:items-start sm:text-left">
          <h1 className="text-5xl md:text-6xl">{data.name}</h1>
          <span className="flex items-center gap-2 text-sm sm:text-base">
            <Icons.location size="20" />
            <p>
              {data.headquarters.address}, {data.headquarters.city},{" "}
              {data.headquarters.state}
            </p>
          </span>
          <p className="text-muted-foreground">{data.summary}</p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-flow-col sm:grid-cols-1 sm:gap-x-8">
            <Info title="Founder" description={data.founder} />
            <Info title="Employees" description={data.employees.toString()} />
            <Info title="Vehicles" description={data.vehicles.toString()} />
            <Info
              title="Launch Sites"
              description={data.launch_sites.toString()}
            />
          </div>
          <nav className="flex items-center">
            <a href={data.links.website} target="_blank" rel="noreferrer">
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.website className="h-5 w-5" />
                <span className="sr-only">Website</span>
              </div>
            </a>
            <a href={data.links.twitter} target="_blank" rel="noreferrer">
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.twitter />
                <span className="sr-only">Twitter</span>
              </div>
            </a>
            <a href={data.links.flickr} target="_blank" rel="noreferrer">
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.flickr />
                <span className="sr-only">Flick R</span>
              </div>
            </a>
          </nav>
        </section>
      </div>
    </div>
  )
}

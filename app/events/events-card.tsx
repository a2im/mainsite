import Image from "next/image";
import Link from "next/link";

export default function EventsCard(){
  return (
    <div className="max-w-6xl mx-auto text-center pt-10">
          <hr className="border-a2imgreen"></hr>
          <Link href="https://membership.a2im.org/events" target="_blank" rel="noopener noreferrer">
        <div className="grid grid-cols-0 md:grid-cols-2 mx-auto gap-10 justify-between hover:scale-105 p-10">
          <div className="flex flex-row my-auto">
          <div className="relative my-auto w-[500px] h-32">
              <Image src="/logos/Event-logos/calendar.png" fill alt="main calendar image" style={{objectFit:"contain"}}/>
            </div>
          </div>
          <div className="my-auto max-w-xl">
            <p>
              Keep up to date with our Calendar of Events.
            </p>
          </div>
        </div>
        </Link>
          <hr className="border-a2imgreen"></hr>
          <Link href="https://indieweek.xyz" target="_blank" rel="noopener noreferrer">
          <div className="grid grid-cols-0 md:grid-cols-2 mx-auto gap-10 justify-between hover:scale-105 p-10">
          <div className="flex flex-row my-auto">
            <div className="relative my-auto w-[500px] h-32">
              <Image src="/logos/Event-logos/iw23_Black_Horizontal_Logo_white.png" fill alt="Indie Week logo" style={{objectFit:"contain"}}/>
            </div>
          </div>
          <div className="my-auto max-w-xl">
            <p>
            A2IM Indie Week is a four-day international conference 
            and networking event aimed at maximizing the global 
            impact of Independent music. Featuring keynotes, panels, 
            exclusive networking sessions, and more, Indie Week 
            has historically drawn an attendance of over 1200 
            participants from over 30 countries.
            </p>
          </div>
        </div>
        </Link>
        <hr className="border-a2imgreen"></hr>
        <Link href="https://liberaawards.com"  target="_blank" rel="noopener noreferrer">
        <div className="grid grid-cols-0 md:grid-cols-2 mx-auto gap-10  justify-between hover:scale-105 p-10">
          <div className="flex flex-row my-auto">
          <div className="relative my-auto w-[500px] h-32">
              <Image src="/logos/Event-logos/libera-dancinglady-left-white-logo.png" fill alt="Libera Awards logo" style={{objectFit:"contain"}}/>
            </div>
          </div>
          <div className="my-auto max-w-xl">
            <p>
            The Libera Awards is the largest Independent music award show globally. 
            It celebrates the successes of the independent music community, 
            from the artists that create the music to the labels that release and promote it.
            </p>
          </div>
        </div>
        </Link>
        <hr className="border-a2imgreen"></hr>
        <Link href="https://a2im.org/panam-indiesummit/"  target="_blank" rel="noopener noreferrer">
        <div className="grid grid-cols-0 md:grid-cols-2 mx-auto gap-10 justify-between hover:scale-105 p-10">
          <div className="flex flex-row my-auto">
          <div className="relative my-auto w-[500px] h-32">
              <Image src="/logos/Event-logos/panam.png" fill alt="Pan-am logo" style={{objectFit:"contain"}}/>
            </div>
          </div>
          <div className="my-auto max-w-xl">
            <p>
            Connect with Independent Music Businesses across the Americas
            </p>
          </div>
        </div>
        </Link>
        <hr className="border-a2imgreen"></hr>
        <Link href="https://a2im.org/lets-get-digital/"  target="_blank" rel="noopener noreferrer">
        <div className="grid grid-cols-0 md:grid-cols-2 mx-auto gap-10 justify-between hover:scale-105 p-10">
          <div className="flex flex-row my-auto">
          <div className="relative my-auto w-[500px] h-32">
              <Image src="/logos/Event-logos/A2IM-Lets-Get-Digital.png" fill alt="let's get digital logo" style={{objectFit:"contain"}}/>
            </div>
          </div>
          <div className="my-auto max-w-xl">
            <p>
            Let’s Get Digital is an A2IM Members Only online summit 
            spanning 2 days, aimed at creating opportunities 
            between independent record labels, digital service 
            providers, technology solutions, and other music industry 
            professionals.
            </p>
          </div>
        </div>
        </Link>
      </div>
          )
        }
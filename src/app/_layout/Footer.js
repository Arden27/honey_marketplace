
import Box from "@/app/_layout/Box";
import Link from "next/link";
import Button from "@/components/Button";
import FacebookIcon from "public/icons/facebook.svg";
import InstagramIcon from "public/icons/at.svg";
import YouTubeIcon from "public/icons/youtube.svg";
import SignalIcon from "public/icons/at.svg";
import TelegramIcon from "public/icons/at.svg";

export default function Footer() {
  return (
    <footer className="bg-footer pb-sm pt-lg !col-span-full">

        <div className=" grid w-full grid-cols-1 gap-sm sm:grid-cols-2 lg:grid-cols-4">
          <Box format="sm">
            <ul>
              <h2 className="mb-2xs">Menu</h2>

              <li>
                <Link href="/sklep">Sklep</Link>
              </li>
              <li>
                <Link href="/artykuly/o-nas">O nas</Link>
              </li>
              <li>
                <Link href="/artykuly">Artykuły</Link>
              </li>
              <li>
                <Link href="/kontakt">Kontakt</Link>
              </li>
            </ul>
          </Box>

          <Box format="sm">
            <ul>
              <h2 className="mb-2xs">Informacje</h2>

              <li>
                <Link href="/sklep/regulamin">Regulamin</Link>
              </li>
              <li>
                <Link href="/sklep/polityka-prywatnosci">
                  Polityka prywatności
                </Link>
              </li>
              <li>
                <Link href="/sklep/dostawa">Dostawa</Link>
              </li>
              <li>
                <Link href="/sklep/zwroty-i-reklamacje">
                  Zwroty i reklamacje
                </Link>
              </li>
              <li>
                <Link href="/kontakt">Współpraca</Link>
              </li>
            </ul>
          </Box>

          <Box format="sm">
            {" "}
            <ul>
              <h2 className="mb-2xs">Moje konto</h2>

              <li>
                <Link href="/konto/zamowienia">Zamówienia</Link>
              </li>
              {/* <li>
            <Link href="/konto/opinie">Opinie</Link>
          </li> */}
              <li>
                <Link href="/konto/ustawienia">Ustawienia</Link>
              </li>
              <li>
                <button>Wyloguj się</button>
              </li>
            </ul>
          </Box>

          <Box format="sm">
            <div>
              <h2 className="mb-2xs">Dane pasieki</h2>
              <address className="not-italic">
                Maciej Brydak
                <br />
                Olszyny 26
                <br />
                07-430 Myszyniec
              </address>
              Nr weterynaryjny: 12349329
            </div>
          </Box>
        </div>

        <div className="grid grid-cols-1 items-center  sm:grid-cols-[auto,auto]">
          <ul className="mb-sm flex flex-wrap sm:col-start-2 sm:mb-0 sm:!justify-end sm:text-right">
            <li>
              <Link href="http://facebook.com/" target="_blank">
                <Button
                  className=" self-center hover:text-footer"
                  format="icon"
                >
                  <FacebookIcon />
                </Button>
              </Link>
            </li>
            <li>
              <Link href="http://facebook.com/" target="_blank">
                <Button
                  className="ml-3xs self-center hover:text-footer"
                  format="icon"
                >
                  <InstagramIcon />
                </Button>
              </Link>
            </li>
            <li>
              <Link href="http://facebook.com/" target="_blank">
                <Button
                  className="ml-3xs self-center hover:text-footer"
                  format="icon"
                >
                  <YouTubeIcon />
                </Button>
              </Link>
            </li>
            <li>
              <Link href="http://facebook.com/" target="_blank">
                <Button
                  className="ml-3xs self-center hover:text-footer"
                  format="icon"
                >
                  <SignalIcon />
                </Button>
              </Link>
            </li>
            <li>
              <Link href="http://facebook.com/" target="_blank">
                <Button
                  className="ml-3xs self-center hover:text-footer"
                  format="icon"
                >
                  <TelegramIcon />
                </Button>
              </Link>
            </li>
          </ul>

          <div className="col-span-full rounded-[2rem] border-2 border-transparent px-xs font-btn text-sm uppercase sm:col-span-1 sm:col-start-1 sm:row-start-1">
            Copyright &copy; 2023&nbsp;
            <Link href="/" className="">
              Dobry Bartnik
            </Link>
          </div>
        </div>

    </footer>
  );
}

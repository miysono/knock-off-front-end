const ListingItem = ({ listing }) => {
  return (
    <div className="rounded-2xl overflow-hidden flex my-5 border-2 shadow-md border-indigo-500 border-opacity-20">
      <div className="w-1/4 relative">
        <img
          src={listing.photos.cover}
          className="w-full h-full object-cover"
        />
        <img
          className="absolute top-5 right-2.5 w-8 h-8"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABYElEQVR4nO2UOUsDURSFv39gp1jGLiCWggs2AVEcRYNYxk6c+ItCcMFKCwOKdi7YWaldBEVwQAuxCLgFokYGzsCDvJlMJglYeODCY+5Z3jYP/pEAA0AB8IBPoAysA2mDk9a3sjieNL42EtPAK1C3VA1YAVY1tnF87VTUzAPzc8AFssAacAT8yLim8SGQF8eVJghJ2QIKhrljqaIx02IIJwjxvRrgqemGiB3gVBXWz8vjwRZQVXMhwiCriurXdfANuI+xAqdJBSu4swVsqrnTRsCuPDZsAWNqfgC5BOY5aX2P0bCrWhLhGphrwXwWuJR2jwj0Ak8inkgYJ2BfmmegnyYYAd4kKMUw3zZuzgQxkTGu7TEwH2K+Jc43sEiLmDFWcmH5P4Ib8wUskxDDwIuMrjRL/1wOjAdwiTYxCDzK8AY407iqresIUsCt8di9A5N0GH3apgowTpfQAwx1y/xv4heyGJcqIC5NCAAAAABJRU5ErkJggg=="
        />
      </div>
      <div className="p-5 w-3/4 relative">
        <div className="flex justify-between w-full">
          <h2 className="text-xl font-semibold">{listing.title}</h2>
          <div className="flex">
            {listing.flowers &&
              Array.from({ length: listing.flowers }).map((flower) => (
                <img
                  key={flower}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEJElEQVR4nO1aS4gcZRDuVRRBD9GD4EXEqBAiQQVRCagYFNSburfF3a7qqp7doEbEg6eNBDxsDgkmERUkqCgaxNdqfIAPlIAH8Z2oiOLFJ2a7qlejm7C21MzO7G9mx0z33223mIJihm2mq76u1/9VbxAcl/+BtFrzZyLpFiTZjywLwHIYSb5AkhnmX88K/gsCpHcA62/Imq2kQPIHktwTBNlI0ESZns5OQJbdgwCsoHuYs5OCpgmybM8BohMd1icaFRmIdCIvCEdvD5ogzHNnA6sUBWL1FEV6QROK+ymPaHQbwMv1gmglFyPLn75ATENKr6oPCMnjZYDoqLxQ29Brz4SSgADJIrOsrszhcFLOhSghYH0AWV4Cln3AcgBYfiwvGj39FljfQNangXUHsLRC1stGR7MTCzlvg6rdUkk/qsDZ/Eryiw3bCU4uGRoE4tw6YPm8dud5QAqyzB7zvAacbECSQ3U7i0NEaGCXQ5TzgPVg7U7y0Joipmv6gbDsbYBzWT6Vt/s6U1mDzVXjIcB6BcbpeiA5UgWYKEoucmpDWlUYAdK3HBvvVGKD9W4HiO6oKPTP9WyQvFgRkAfd+nikIiDvOhHZV40N3eVG5F6/FJJFY3zI+jCwfuVcSzrEKRtBUl1+ivIlkD6ErM941ybpnU5EdMwvvDK73DqykZD0emD92K7Z+Wki1vOX0uBDYLnOZYV2hPeznV7ZMz0+nqxClt89Uug7c9bthHY+QpIYObkJKLnZzmvG64+eXfZbj2h83UeVjT97RuUwkDy/tEW5MYrm1yLKGaOj2cmm9t3+ZtdC1k12bG+viTxshqyb+gbieJycU/bxBEh3GoDJSTkdSbaVem+WAwO3MNaTSzNGutnuGbFsRNZwqRbvKmfwyoIN2hVBdAt1qfuUAqJNB1i/QZZPurkMJFO+949YNv4DiG7hZ6cA66se6fRKz2l3TRTrDb0iZ3mseErpfccE8TcwpE8WMhan6zv3SFYBy/dOTn9mRd8GgumagpHeEhQRy+m8hz3r61NTP52GrK/1OyKPGpgo0svzRVmOWPsOior1/dwcxTqfM8X7VX4uMLPSwry9HRGcW+dbmGUptOYvLAykjA5TloZxih5AdGfdAHA5ZWeKA2GZrR0A93RPYSDI+mYDAGSmQPq6T0Qqoae+JC23IMuzDQKytzgQ0vsbBGR3YSBRnNxSPwDtp7R5xXhEma8OfDSK5tcGPlI2ISoYjQ+Ccv6Lwdb6hfLaSNQue3NbdK8MtqGJk6uDMiSKkmvy0mDbmLgOGOUFluk8DwVIFociUXnEeIa9URoCwPthrLcevTHpytjYD6ca9e2sgWRhcDrJpxjLtaWCcJ0Alttspwukc52nZp/yHrJstdNynvsZ+bIdWJvLk8yY2haGSC6tBMBxCf49+Qs6LfulTToQHgAAAABJRU5ErkJggg=="
                  className="w-6 h-6"
                />
              ))}

            {listing.stars &&
              Array.from({ length: listing.stars }).map((star) => (
                <img
                  key={star}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADiUlEQVR4nO2aT4hXVRTHz5hmm8x/zTvnN5MSiKFWCxMRAt0IBW6SUIhMhLSFCtZGiRZBIUSLwoWCEFSCG5EiEgX/MMw75/ebUQZcaKGBLgo1cFGiWb93TnPjzk+Hnzgzv/f03fd7D/rC2d57P/ece+69516A/9VZbmDhUyY0ZExnnIMeqKosprdMyHlL6rgaqioTPHkfRJm+hirKDff1q5CNgwjdccNzZ0HVZIIf34dos61QJTkHPSp05SEQxgZUScq1tRN4Y8xcjEuhKlLBw5OBKNPnUAW5kTnPKONfU4D87kZgBpRdxtGOySDGYWJ6A8ouExrpBGKMP0CZ1Wz0vtQRorWnqBucT1BWKeO+NCD3bDeUUe7i0idV8GZaEBW8XMqDpHG0MYM3WgfJmF6FssmETmQFUcGvCh2kG1g42x8C3RAuSRrRSr9zq+CbJtEWY9ppgh+1HxDTg9BtY9pjMW43xs3KtN63nQiucFJ7wTX6+1IfNE1omwodMsHvTPCUT5/KeEkZrynTrayDC2XK9Kcy/qZMPxvTubGxMh1VoW+McQP443W3B/nYkEJXQGN83dN2ezCP5ak6vdZaA43+RSr0U/U8gb/4dfvggpZ5T5vg990enKW34z4JTZydHPT4LKJM/5Y4lEZV8DPnYFrnTMa4oYxJQAX/NsFNkEXNuO9lFbpaIohfE6ZXMkGMh9rZ2jxjPN1tCGOMXT3qfSSIcZgBmO5jsnueoIO53ihN6G1lvFtgKP1jTO9CCDUHabmP1QK8cD3h3lUQUk6eq7XOOqHWA53zfUARUsEvg3mD6QsoSiZ0MaBHLhQC4QaeRb+7BvTIaCGFCX8BCr3YLcZ3goO0LmFhQVTo2yKq7NcLALkRtMLSrEcvBg8raVmTo2XBQIzp/aJAjGlXSJBjmUKEKVHGvS2jJCPIsYCVRLqdfiB4vv3YPVYXZjqbYZ3ccccXzcwdJIlxTTov4F1/y3RH4ImHJsPBNGN6L+2EJCGetFXo0xThMOji2uJObbnB6Pn2p+spvPJJ7iAmNDx5h/iHn+msKbN1pZ6y8D2UK4SvVkxREv3RlzYfue2h3miyTVaFzPGCObmB+JrsBJ3c8PXf3PqoR+smuuvk+kynTAfaUuqon0HX6J8LYR5S97WXo1Rof24dmKDcWwuXi/gck9Rxte8r908GvmFj+tB/W4JCv0jhBz7tF9VnKfQfFFqnRXm5TeMAAAAASUVORK5CYII="
                  className="w-6 h-6"
                />
              ))}
          </div>
        </div>

        <div className="flex gap-2.5">
          <p className="text-sm">{listing.address}</p>
          {listing.lat && listing.lon && (
            <p className="text-sm text-indigo-500 hover:underline">
              Show on map
            </p>
          )}
        </div>
        <div className="w-full">
          <p className="mt-2.5 truncate">{listing.description}</p>
        </div>
        <div className="mt-2.5 flex justify-between">
          <p className="font-semibold flex gap-1 items-center">
            {listing.price_per_night}€{" "}
            <span className="font-normal">
              <img
                className="w-5 h-5"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABNElEQVR4nO2US07DQBBEhw0rJD634COFBeImWUeedrdJLgEnSEgInAMOAJfgcwdYON1xlkZGYybIjoI8M5gVlNQby67nKrdHqX/5KI5nx1GSdtRvCZBHmnjYunGUpB1jrFGycoiHq0niODvUxGNAfgaSRa8322kF0O0Wm0ByrZHfgaRYzmDwuuWdpIRUKrLmD1Xj5WjiE2+AeetqNZrkZp25BZx7A2ppzrKj1Vrqw29E6XYwAFAm35vbFMi3ShUbYQmIX5oANsldUBKzim6Az7oA5QISPgXgvX6fd1sGSH1QpMWKZA2AH10A4x8ARo0AczQAce4P4Bxgvt8IKFOgTAP6nyhXmaNCk9y7mpt7zTPOgC8IyrThr841yZW3eVX2m1xq4ie7wguzLeZalMwPgo3Vn9cHBTURbHhU6OIAAAAASUVORK5CYII="
              />
            </span>
          </p>
          <div className="flex">
            {Array.from({
              length: listing.price_per_night / listing.price_per_pers,
            }).map((person) => (
              <img
                key={person}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA80lEQVR4nO1Tuw5BQRC9PR2FgtqnKFSiJZjdHVytkPgjIvFPBJF4zGxUikvWxiPEexGJk5xmTnLO5sys5/3xEyhWZwmB3BXI2pJ6UOGkM3NAngnk9TFB8dxoLwcI+/L1BXZcBOiLAYr5rQGATA4CqHelovbLAVDhpFnoeT00lXIa9xyeacd0viVy25n5W+H7k3CprEW+xpFTDVFHjZbLjUNPmYNaZAFpZK+Fmmc6Usvug4YlqTMPmQulGwIpOJwjrcys4C9jhiZwO9svnQJQXL/LXEpKHZuLu0kBIKdvV4M8eNycdz+7f7ueZ83R8vsBf3wcG/3ihg9/BM/vAAAAAElFTkSuQmCC"
              />
            ))}
          </div>
        </div>
        <div className="flex items-center mt-2.5 gap-1">
          <p className="font-semibold">{listing.price_per_pers}€</p>
          <img
            className="object-contain"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA80lEQVR4nO1Tuw5BQRC9PR2FgtqnKFSiJZjdHVytkPgjIvFPBJF4zGxUikvWxiPEexGJk5xmTnLO5sys5/3xEyhWZwmB3BXI2pJ6UOGkM3NAngnk9TFB8dxoLwcI+/L1BXZcBOiLAYr5rQGATA4CqHelovbLAVDhpFnoeT00lXIa9xyeacd0viVy25n5W+H7k3CprEW+xpFTDVFHjZbLjUNPmYNaZAFpZK+Fmmc6Usvug4YlqTMPmQulGwIpOJwjrcys4C9jhiZwO9svnQJQXL/LXEpKHZuLu0kBIKdvV4M8eNycdz+7f7ueZ83R8vsBf3wcG/3ihg9/BM/vAAAAAElFTkSuQmCC"
          />
        </div>
      </div>
    </div>
  );
};

export default ListingItem;

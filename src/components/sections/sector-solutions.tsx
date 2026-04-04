import Image from "next/image";

const sectors = [
  {
    title: "Kamu",
    alt: "Kamu Sektörü",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4sb5W7btSvkrvyxg9sC0LqNZAjR5nZn6rL7IlgvlSaehB7ZtNm3DEPGWYRSMdJLodMcVACKyfEqPAd-73FZ42rfA_XMyOWuF1hwgH2iArw8szrDD44LW2MbmF00WvIl6wTPUePr6Be06hpn8_fBpvPFjKbRtk5CpmsAk4120tfmA5f4ADXQ2y6FmQEVn4uo6KH_cB_bltSaPLkhKSUm4-v6XPEZzmU6HzP4_rYLsgLM4EdRC1KTMQx4KLaVxL9ZAzV37tQR-i3u4",
  },
  {
    title: "Finans",
    alt: "Finans Sektörü",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbSJrn6DSEiMFo7uRwji7ags2LFG3pRs70XDGFV1IVYa-o5N-GdhXVJDn6SKWViMs9gdKJm54kAXMB1Mxmc644PCa5QXKi9ekTV5yHA21LGyCleWx6MkfMlCXk1r3aXmuxJWuI4CvuUbpiocSjOqnFhrihr7YcEKA6N7EUbh9LtqzGfUYlunEFycj972Nn2puMeY-hVUx6oeMtyuxDvCzw2PtFLQDD1XA-m5mVKbmS7g293hygdR0jbco_1M57ejDRSNQHEwEBS-Q",
  },
  {
    title: "Sigorta",
    alt: "Sigorta Sektörü",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlfxFEkhR0RuIO7nwi041csX_WfOsSR_vqOXQl4x0P2uxSrKWGXaurdlY4UvcHTavTO4b652wpL3dDgxIvwS9xKW3_BOFuMKY2p8rygC1ZDKydYzw68qLdNwdhqp20975_GKNb7OE1HotrcwHCHtmmPwGd2pK-DISsrmmUsDdDTHKj7-qp1b7U0eOzaZmOhLjahtI3qeI9YJxvAO3ugpqqwDzbkq1I8stnBsMO02kwF6FdSYcdej7axeFeEDy7bLgAiV3NLygQRpU",
  },
  {
    title: "Perakende",
    alt: "Perakende Sektörü",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCks8ZuiujpuQyHJzr-vT9WwDkaXQUFgGWbAvjsl7DbQdkaXSBt4HjoP1tUPfWlHLTYDZzYPTGj0hgD9FOhAwpxw46uDJv-pm4_ELZaK1JqcwfnvCGQSI48mQJZ1WS4T-z4fKz4lr_GWfLXCbmER4emKmZ-j1PU2G-s3jD7OLmoqfDQqGuEdOoi2zqsueRU9vnDKCH-Tg8SBSfEpRSgMxEmfm14M8LBeHcpzTgXDgyWIfyyoCcpZSD1gIMmt7lK51nZEP7wRUbpWSc",
  },
  {
    title: "Enerji",
    alt: "Enerji Sektörü",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKIxiwJltRPon5URO1qswDRXTf5_oI4cf4HtRGHoQ24mrJ2zOliusH2c96v9SRaS0d4XVgw-VSk70bo-qMxwY9vCWtMW4nil1muxYWhvK6pTGdnD5Dx2EntBfovYZBZGDuLkMMp_Ktx9cigHiAsp7QPE4_uSu2MFSa7_NEJkFgmTPHNJoQFKhd1FmbrFeEOZTixoGbhszdjeIF-46oBl7-e4PGxm3E1eaCgJi4yy7d96VA9Zl2IyAQmFRbRx5tQMwUobQHd2MuaJs",
  },
  {
    title: "Çağrı Merkezleri",
    alt: "Çağrı Merkezleri",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC66jgZxRMR5IjCZMLOuFoao6FXWyQvbhIZpwthmFfaKuK-cXdafhhQGl5PcXPIeZ2d6AEC_oY_LMyG7wg4ww65-MnGPrvhUXzBDKLQw17IAEZTjOgPtycyr2kYA3rfDEIHEE3QodsE36F0poeDmW_R1N9X4YSeq3hh7pfBlDj0UO3xYI1TUlvzXRRM9fFHlR0NvJxwL5pEy-DLiRQ5QDBIc3LaHpjatXgiAW3WAWIxqrWerRhjYDAX5c93vqLGPqwxJrX7hrgdgQI",
  },
];

export function SectorSolutions() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <div className="mb-16">
        <span className="text-primary font-bold tracking-widest text-sm uppercase block mb-4">
          ● SEKTÖREL ÇÖZÜMLER
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sectors.map((sector) => (
          <div
            key={sector.title}
            className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer shadow-xl"
          >
            <Image
              src={sector.src}
              alt={sector.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex flex-col justify-end p-8 transition-colors group-hover:bg-primary/40">
              <h4 className="text-white font-headline font-bold text-2xl">
                {sector.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

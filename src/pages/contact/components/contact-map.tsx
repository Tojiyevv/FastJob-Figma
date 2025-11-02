export const ContactMap = () => {
  return (
    <section className="max-w-[1296px] mx-auto py-16 px-4">
      <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-sm">
        <iframe
          title="Bizning manzil"
          src="https://www.google.com/maps?q=Chorsu,+Tashkent,+Uzbekistan&hl=uz&z=15&output=embed"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

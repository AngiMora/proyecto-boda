export default function Envelope() {
  return (
    <section className="min-h-screen bg-[#F8F6F2] flex items-center justify-center px-6">

      <div className="max-w-3xl w-full">

        <div className="relative">

          {/* Parte superior */}

          <div
            className="
              w-full
              h-52
              bg-[#D8C3A5]
              rounded-t-xl
              shadow-2xl
              relative
              overflow-hidden
            "
          >

            <div
              className="
                absolute
                left-1/2
                top-0
                -translate-x-1/2

                w-0
                h-0

                border-l-[280px]
                border-r-[280px]
                border-t-[180px]

                border-l-transparent
                border-r-transparent
                border-t-[#C8A96A]
              "
            />

          </div>

          {/* Base */}

          <div
            className="
              bg-white
              rounded-b-xl
              shadow-2xl
              p-16
              text-center
            "
          >

            <h2 className="text-5xl font-serif mt-8 text-[#374151]">
              ¡Nos Casamos!
            </h2>

            <p className="mt-10 text-xl text-gray-500 leading-9">

              Hay momentos que cambian la vida para siempre.

              <br /><br />

              Y no podríamos imaginar este día sin las personas que
              han sido parte de nuestra historia.

            </p>

            <button
              className="
                mt-14
                bg-[#C8A96A]
                hover:bg-[#b99857]
                transition
                text-white
                px-10
                py-4
                rounded-full
                text-lg
              "
            >

              Abrir invitación

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}
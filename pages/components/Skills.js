const Skills = () => {
  return (
    <>
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div class="max-w-screen-md mb-8 lg:mb-16">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              My Skills
            </h2>
            <p class="text-gray-500 sm:text-xl dark:text-gray-400">
              I'm proficient in various programming languages, enabling me to
              tackle diverse technical challenges. My skills in coding empower
              me to bring ideas to life.
            </p>
          </div>
          <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"></div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">HTML/CSS</h3>
              <p class="text-gray-500 dark:text-gray-400">
                In my first year, I built a solid foundation in web development
                with HTML and CSS. This duo allowed me to craft visually
                appealing and structurally sound web pages, combining style with
                structure.
              </p>
            </div>
            <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"></div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Javascript</h3>
              <p class="text-gray-500 dark:text-gray-400">
                JavaScript became my go-to for web interactivity. With it, I
                breathe life into web applications, creating user-friendly and
                dynamic experiences that engage and delight users.
              </p>
            </div>
            <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"></div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">PHP/MySQL</h3>
              <p class="text-gray-500 dark:text-gray-400">
                PHP empowered me with server-side capabilities, enabling the
                creation of dynamic and data-driven websites. I've leveraged PHP
                for various projects, making web applications more versatile and
                functional.
              </p>
            </div>
            <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"></div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Python</h3>
              <p class="text-gray-500 dark:text-gray-400">
                Python's versatility is its hallmark. I've explored its power
                for a wide range of programming tasks, from scripting to data
                analysis, making it a valuable asset in my toolkit.
              </p>
            </div>
            <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"></div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">React</h3>
              <p class="text-gray-500 dark:text-gray-400">
                React has become my forte in building modern, responsive web
                interfaces. It allows me to develop feature-rich, interactive,
                and efficient user experiences that meet the demands of today's
                web applications.
              </p>
            </div>
            <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"></div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">
                Tailwind CSS
              </h3>
              <p class="text-gray-500 dark:text-gray-400">
                Tailwind CSS has transformed my design process, offering a
                utility-first approach that streamlines the creation of elegant
                and efficient web layouts. It enhances my productivity while
                delivering visually stunning results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;

// script for switching between color modes

// variables

const modeChanger = document.getElementById('modeChanger');
const modeRestorer = document.getElementById('modeRestorer');
const masterNode = document.getElementById('masterNode');
const lightBody = document.getElementById('lightBody');

// function for switching from light mode to dark mode

function goodNight() {
  lightBody.classList.add('dark-body');
  masterNode.classList.add('dark-mode-activated');
  modeChanger.style.display = 'none';
  modeRestorer.style.display = 'block';

  // customized tsParticles configurations for dark mode

  const particles = {
    fpsLimit: 60,
    particles: {
      number: {
        value: 90,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: '#ffffff',
        animation: {
          enable: true,
          speed: 20,
          sync: true,
        },
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
        },
        polygon: {
          nb_sides: 5,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 3,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 6,
        random: true,
        anim: {
          enable: false,
          speed: 20,
          size_min: 0.1,
          sync: false,
        },
      },
      links: {
        enable: true,
        distance: 100,
        color: '#757575',
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 3,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'repulse',
        },
        onclick: {
          enable: true,
          mode: 'push',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 0.8,
        },
        repulse: {
          distance: 200,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
    background: {
      color: '#000000',
      image: '',
      position: '50% 50%',
      repeat: 'no-repeat',
      size: 'cover',
    },
  };

  // ts particles loader for adding dark mode configurations

  tsParticles.load('particlesCase', particles);
}

// function for switching from dark mode to light mode

function goodDay() {
  lightBody.classList.remove('dark-body');
  masterNode.classList.remove('dark-mode-activated');
  modeChanger.style.display = 'block';
  modeRestorer.style.display = 'none';

  // customized tsParticles configurations for light mode

  const particles = {
    fpsLimit: 60,
    particles: {
      number: {
        value: 90,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: '#000000',
        animation: {
          enable: true,
          speed: 20,
          sync: true,
        },
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
        },
        polygon: {
          nb_sides: 5,
        },
      },
      opacity: {
        value: 0.7,
        random: false,
        anim: {
          enable: false,
          speed: 3,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 6,
        random: true,
        anim: {
          enable: false,
          speed: 20,
          size_min: 0.1,
          sync: false,
        },
      },
      links: {
        enable: true,
        distance: 100,
        color: '#757575',
        opacity: 0.7,
        width: 1,
      },
      move: {
        enable: true,
        speed: 3,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'repulse',
        },
        onclick: {
          enable: true,
          mode: 'push',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 0.8,
        },
        repulse: {
          distance: 200,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
    background: {
      color: '#ffffff',
      image: '',
      position: '50% 50%',
      repeat: 'no-repeat',
      size: 'cover',
    },
  };

  // ts particles loader for adding light mode configurations

  tsParticles.load('particlesCase', particles);
}

// event listeners

modeChanger.addEventListener('click', goodNight);
modeRestorer.addEventListener('click', goodDay);

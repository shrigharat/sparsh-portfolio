const FATHER_EMAIL = 'Santosh1976patil@gmail.com';
const MOTHER_EMAIL = 'Pallu8283patil@gmail.com';
const FATHER_PHONE = '+91 8652860101';
const MOTHER_PHONE = '+91 8087760007';

const RANKING_DATA = [491, 317, 168, 194, 231, 194, 94, 48, 35]

const attachCopyToClipboardHandlers = () => {
  const fatherEmailButton = document.getElementById('copy-father-email');
  const motherEmailButton = document.getElementById('copy-mother-email');
  const fatherPhoneButton = document.getElementById('copy-father-number');
  const motherPhoneButton = document.getElementById('copy-mother-number');

  fatherEmailButton.addEventListener('click', (e) => {
    navigator.clipboard.writeText(FATHER_EMAIL);
  })
  motherEmailButton.addEventListener('click', (e) => {
    navigator.clipboard.writeText(MOTHER_EMAIL);
  })
  fatherPhoneButton.addEventListener('click', (e) => {
    navigator.clipboard.writeText(FATHER_PHONE);
  })
  motherPhoneButton.addEventListener('click', (e) => {
    navigator.clipboard.writeText(MOTHER_PHONE);
  })
}

const attachHamburgerHandler = () => {
  const hamburgerButton = document.getElementById('hamburger-menu');
  const headerElement = document.getElementById('nav-header');
  hamburgerButton.addEventListener('click', () => {
    headerElement.classList.toggle('open');
    document.body.classList.toggle('no-scroll');
  })
}

const animateBannerText = () => {
  const text = new SplitType('#banner-title', { types: 'chars' });
  const bannerDescription = document.getElementById('banner-description');
  const bannerCTA = document.getElementById('banner-cta');
  const characters = text.chars;
  gsap.fromTo(
    characters,
    {
      y: 100,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.05,
      duration: 2,
      ease: 'power4.out',
    }
  )
  gsap.fromTo(
    bannerDescription,
    {
      y: 100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.05,
      duration: 2,
      ease: 'power4.out',
      delay: 0.5
    }
  )
  gsap.fromTo(
    bannerCTA,
    {
      y: 100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.05,
      duration: 2,
      ease: 'power4.out',
      delay: 0.8
    }
  )
}

animateBannerText();
window.addEventListener('DOMContentLoaded', () => {
  attachCopyToClipboardHandlers();
  attachHamburgerHandler();
  const data = {
    labels: ['Feb \'23', 'Apr \'23', 'Jun \'23', 'Aug \'23', 'Oct \'23', 'Dec \'23', 'Feb \'24', 'Apr \'24', 'May \'24'],
    datasets: [{
      label: 'AITA Ranking',
      borderColor: '#00B1CA',
      data: RANKING_DATA
    }]
  }
  new Chart(
    document.getElementById('ranking-graph'),
    {
      type: 'line',
      options: {
        animation: false,
        layout: {
          padding: {
            top: 20,
            left: 20
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            },
            title: {
              display: true,
              text: 'Sparsh\'s AITA (ALL INDIA TENNIS ASSOCIATION) Ranking in the past year',
              font: {
                family: 'DM Sans', // Custom font for x-axis title
                size: 14,
                weight: 'bold',
              },
              color: '#00B1CA', // Optional: Custom color for x-axis title
            },
            ticks: {
              font: {
                family: 'DM Sans', // Custom font for y-axis labels
                size: 12
              },
              color: '#00B1CA', // Optional: Custom color for y-axis labels
            },
          },
          y: {
            display: false,
            grid: {
              display: false
            },
            ticks: {
              font: {
                family: 'DM Sans', // Custom font for y-axis labels
              },
              color: '#00B1CA', // Optional: Custom color for y-axis labels
            },
            reverse: true,
            beginAtZero: true
          },
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            bodyFont: {
              family: 'DM Sans', // Custom font for tooltip
            },
            titleFont: {
              family: 'DM Sans', // Custom font for tooltip title
            },
            footerFont: {
              family: 'DM Sans', // Custom font for tooltip footer
            }
          },
          datalabels: {
            align: 'top',
            anchor: 'end',
            formatter: function (value, context) {
              return RANKING_DATA[context.dataIndex];
            },
            font: {
              family: 'DM Sans', // Custom font for data labels
              size: 10,
              // weight: 'bold',
            },
            color: '#000' // Optional: Custom color for data labels
          }
        }
      },
      data,
      plugins: [ChartDataLabels]
    }
  );

})
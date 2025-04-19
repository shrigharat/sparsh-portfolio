const FATHER_EMAIL = 'Santosh1976patil@gmail.com';
const MOTHER_EMAIL = 'Pallu8283patil@gmail.com';
const FATHER_PHONE = '+91 8652860101';
const MOTHER_PHONE = '+91 8087760007';

const UNDER_12_RANKING_DATA = [491, 317, 168, 194, 231, 194, 94, 48, 35];
const UNDER_14_RANKING_DATA = [330, 342, 181, 245, 217];

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

const rankingU12GraphNode = document.getElementById('ranking-graph-u12');
const rankingU14GraphNode = document.getElementById('ranking-graph-u14');
const renderUnder12RankingGraph = () => {
  var options = {
    series: [
      {
        name: "Under 12",
        data: UNDER_12_RANKING_DATA
      }
    ],
    chart: {
    height: 400,
    type: 'line',
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    }
    },
    colors: ['#00B1CA'],
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: 'smooth'
    },
    title: {
      text: 'Average High & Low Temperature',
      align: 'left'
    },
    grid: {
      borderColor: '#98DEED',
      row: {
        colors: ['#F1FAFC', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    markers: {
      size: 1
    },
    xaxis: {
      categories: ["Feb '23", "Apr '23", "Jun '23", "Aug '23", "Oct '23", "Dec '23", "Feb '24", "Apr '24", "May '24"],
      title: {
        text: 'Month'
      }
    },
    yaxis: {
      title: {
        text: 'Ranking'
      },
      reversed: true,
      min: 1,
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      floating: true,
      offsetY: -25,
      offsetX: -5
    }
  };

  rankingU12GraphNode.innerHTML = '';
  var chart = new ApexCharts(rankingU12GraphNode, options);
  chart.render();
}

const renderUnder14RankingGraph = () => {
  var options = {
    series: [
      {
        name: "Under 14",
        data: UNDER_14_RANKING_DATA
      }
    ],
    chart: {
    height: 400,
    type: 'line',
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    }
    },
    colors: ['#00B1CA'],
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: 'smooth'
    },
    title: {
      text: 'Average High & Low Temperature',
      align: 'left'
    },
    grid: {
      borderColor: '#98DEED',
      row: {
        colors: ['#F1FAFC', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    markers: {
      size: 1
    },
    xaxis: {
      categories: ["Nov '24", "Dec '24", "Jan '25", "Feb '25", "Mar '25"],
      title: {
        text: 'Month'
      }
    },
    yaxis: {
      title: {
        text: 'Ranking'
      },
      reversed: true,
      min: 1,
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      floating: true,
      offsetY: -25,
      offsetX: -5
    }
  };

  rankingU14GraphNode.innerHTML = '';
  var chart = new ApexCharts(rankingU14GraphNode, options);
  chart.render();
}

const attachRankingGraphHandlers = () => {
  const under12Button = document.getElementById('under-12');
  const under14Button = document.getElementById('under-14');

  under12Button.addEventListener('click', () => {
    rankingU12GraphNode.classList.toggle('hidden');
    rankingU14GraphNode.classList.toggle('hidden');
    renderUnder12RankingGraph();
    under12Button.classList.toggle('active-ranking-graph-button');
    under14Button.classList.toggle('active-ranking-graph-button');
  });

  under14Button.addEventListener('click', () => {
    rankingU12GraphNode.classList.toggle('hidden');
    rankingU14GraphNode.classList.toggle('hidden');
    renderUnder14RankingGraph();
    under12Button.classList.toggle('active-ranking-graph-button');
    under14Button.classList.toggle('active-ranking-graph-button');
  });
}

animateBannerText();
window.addEventListener('DOMContentLoaded', () => {
  attachCopyToClipboardHandlers();
  
  attachHamburgerHandler();

  attachRankingGraphHandlers();

  renderUnder12RankingGraph();
})
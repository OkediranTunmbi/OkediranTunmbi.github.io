/* ============================================================
   CONTENT.JS  —  edit this file to update the entire site
   No HTML knowledge required. Change values, save, reload.
   ============================================================ */

const CONTENT = {

  /* ── Meta & SEO ─────────────────────────────────────────── */
  meta: {
    siteName:    "Tunmbi Okediran",
    title:       "Tunmbi Okediran — ML Engineer · Quant Research · AI Governance",
    description: "Portfolio of production-style ML projects at the intersection of quantitative finance, NLP engineering, and model risk governance.",
    url:         "https://okedirantunmbi.github.io/",
    ogImage:     "assets/img/og-card.png",
    themeColor:  "#C0552A",
  },

  /* ── Navigation ─────────────────────────────────────────── */
  nav: {
    logo: "T.O.",
    links: [
      { label: "About",      href: "#about"      },
      { label: "Projects",   href: "#projects"   },
      { label: "Results",    href: "#results"    },
      { label: "Philosophy", href: "#philosophy" },
      { label: "Stack",      href: "#stack"      },
      { label: "Contact",    href: "#contact"    },
    ],
  },

  /* ── Hero ───────────────────────────────────────────────── */
  hero: {
    greeting:  "Ciao, I'm",
    name:      "Tunmbi Okediran",
    roles: [
      "ML Engineer — Financial Services",
      "Quant Researcher",
      "AI Governance & Model Risk",
    ],
    tagline:   "I build ML systems that work in production — and document honestly when they don't.",
    cta: [
      { label: "View Projects", href: "#projects", primary: true  },
      { label: "Get in Touch",  href: "#contact",  primary: false },
    ],
    photo: "assets/img/headshot.jpg",
    photoAlt: "Tunmbi Okediran",
  },

  /* ── About ──────────────────────────────────────────────── */
  about: {
    heading: "About",
    bio: [
      "I'm an ML engineer and quant researcher focused on financial applications — building systems that go from raw data to calibrated model to production API, with full experiment tracking and honest evaluation throughout.",
      "My work spans three overlapping domains: NLP pipelines for financial text (sentiment, summarization), quantitative signal research (volatility forecasting, earnings-call backtests), and model risk governance (SR 11-7 validation, drift monitoring, fairness testing).",
      "I care about the gap between a model that performs on a benchmark and one that can be safely deployed — calibration, leakage prevention, interpretability, and documented limitations are built into every project, not added as an afterthought.",
    ],
    highlights: [
      { value: "4",      label: "End-to-end projects" },
      { value: "96.8%",  label: "Peak macro-F1 (NLP)" },
      { value: "SR 11-7", label: "Governance framework" },
      { value: "CUDA",   label: "GPU-trained models"   },
    ],
    snapshot: {
      heading: "Background at a Glance",
      intro: "Education, research, and industry experience in ML engineering, quant finance, and model governance.",
      sections: [
        {
          title: "Education",
          items: [
            "University of Delaware - PhD, Financial Services Analytics (Aug 2024 - Present)",
            "Brno University of Technology - MSc, Mathematical Engineering (Sept 2020 - Jul 2022)",
            "Federal University of Technology Akure - B.Tech, Industrial Mathematics (Feb 2014 - Oct 2018), First Class Honors",
          ],
        },
        {
          title: "Experience Highlights",
          items: [
            "PhD Researcher, University of Delaware: research on economic regularization for cross-sectional return prediction and sufficient dimension reduction.",
            "Data Analyst II, Zebra Technologies: Supported SQL Server-to-GCP migration for 50+ Power BI dashboards, improving dashboard responsiveness and reducing recurring refresh failures through performance analysis, data model cleanup, and reporting logic optimization.",
          ],
        },
        {
          title: "Research & Leadership",
          items: [
            "Accepted contributed paper, Joint Statistical Meetings (JSM) 2026: economic regularization for cross-sectional return prediction.",
            "Vice President, Data Science Student Association (University of Delaware): leading website and AI-assisted communication workflow initiatives.",
          ],
        },
      ],
      quickFacts: [
        { label: "Location", value: "Newark, Delaware, USA" },
        { label: "Focus", value: "ML Engineering, Quant Research, AI Governance" },
        { label: "Open To", value: "Quant research, ML engineering, and model risk roles" },
      ],
    },
  },

  /* ── Projects ───────────────────────────────────────────── */
  projects: {
    heading: "Featured Projects",
    subheading: "End-to-end ownership: data pipelines, modelling, evaluation, and risk-aware communication.",
    items: [
      {
        id:       "nlp",
        tag:      "NLP · MLOps",
        title:    "Financial NLP Pipeline",
        subtitle: "Sentiment classification & earnings call summarization",
        description: "Benchmarked TF-IDF + LogReg, fine-tuned FinBERT, and GPT-4 few-shot on Financial PhraseBank. Deployed the best classifier as a FastAPI service with temperature-scaled confidence scores and a SHA256 API response cache. Two-variant GPT-3.5 summarization evaluated with ROUGE and BERTScore.",
        metrics: [
          { label: "FinBERT macro-F1", value: "96.8%" },
          { label: "GPT-4 macro-F1",   value: "96.8%" },
          { label: "TF-IDF baseline",  value: "78.5%" },
          { label: "ECE (calibrated)", value: "0.015" },
        ],
        tags:   ["FinBERT", "GPT-4", "FastAPI", "MLflow", "SHAP"],
        github: "https://github.com/OkediranTunmbi/ml-quant-governance-portfolio",
      },
      {
        id:       "earnings",
        tag:      "Quant · NLP",
        title:    "Earnings Sentiment Signal",
        subtitle: "NLP-to-quant pipeline · long-short backtest",
        description: "Fine-tuned FinBERT on Financial PhraseBank (98% accuracy), scored 2,425 ECTSum earnings transcripts, and aggregated to a weekly sector sentiment matrix across 9 GICS ETFs. Backtested a long-top-2 / short-bottom-2 sector strategy with a structurally matched random benchmark and no look-ahead bias.",
        metrics: [
          { label: "Classifier accuracy", value: "98.0%" },
          { label: "ECE after calibration", value: "0.010" },
          { label: "Backtest Sharpe",      value: "−0.66" },
          { label: "Benchmark Sharpe",     value: "+0.07" },
        ],
        tags:   ["FinBERT", "yfinance", "GICS sectors", "long-short"],
        github: "https://github.com/OkediranTunmbi/ml-quant-governance-portfolio",
        honestNote: "The signal underperformed. Both strategies shared a ~16% drawdown, pointing to macro regime — not signal quality — as the driver. Documented intentionally.",
      },
      {
        id:       "vol",
        tag:      "Quant · Deep Learning",
        title:    "Multi-Horizon Volatility Forecasting",
        subtitle: "Naive · GARCH · LightGBM · PyTorch LSTM",
        description: "Compared four models on SPY volatility forecasting across 1-day, 5-day, and 21-day horizons using 14 years of data. Enforced strict leakage-prevention: scalers fit per train fold, horizon-length gaps in TimeSeriesSplit, and targets computed from future returns only.",
        metrics: [
          { label: "LSTM RMSE (1d)",  value: "1.193" },
          { label: "LSTM RMSE (21d)", value: "0.423" },
          { label: "vs Naive (1d)",   value: "−26%" },
          { label: "LightGBM dir. acc.", value: "52.8%" },
        ],
        tags:   ["PyTorch", "GARCH", "LightGBM", "SHAP", "HAR features"],
        github: "https://github.com/OkediranTunmbi/ml-quant-governance-portfolio",
      },
      {
        id:       "gov",
        tag:      "Model Risk · Governance",
        title:    "Model Risk Governance Toolkit",
        subtitle: "SR 11-7 aligned · credit risk · Lending Club",
        description: "Production-oriented MRM toolkit covering the full SR 11-7 lifecycle: data leakage taxonomy, PSI/KS drift monitoring, Platt-scaling calibration, ECOA 80%-rule disparate impact testing, threshold governance, and auto-generated HTML validation reports via Jinja2 and Evidently dashboards.",
        metrics: [
          { label: "Drift metrics",    value: "PSI + KS" },
          { label: "Fairness tests",   value: "3 criteria" },
          { label: "Framework",        value: "SR 11-7"   },
          { label: "Report format",    value: "HTML/PDF"  },
        ],
        tags:   ["SR 11-7", "Evidently", "Fairness", "Platt scaling", "Jinja2"],
        github: "https://github.com/OkediranTunmbi/ml-quant-governance-portfolio",
      },
    ],
  },

  /* ── Results Snapshot ───────────────────────────────────── */
  results: {
    heading: "Results Snapshot",
    subheading: "Numbers from actual runs — not estimated.",
    tables: [
      {
        title: "Financial NLP — Sentiment Classification (test set, n=453)",
        columns: ["Model", "Accuracy", "Macro-F1", "ECE"],
        rows: [
          ["FinBERT fine-tuned", "98.0%", "96.8%", "0.015"],
          ["GPT-4 few-shot",     "96.9%", "96.8%", "0.057"],
          ["TF-IDF + LogReg",    "85.2%", "78.5%", "0.057"],
        ],
        best: 0,
      },
      {
        title: "Volatility Forecasting — RMSE by Horizon (5-fold CV)",
        columns: ["Model", "1-day RMSE", "5-day RMSE", "21-day RMSE"],
        rows: [
          ["LSTM",      "1.193", "0.575", "0.423"],
          ["LightGBM",  "1.288", "0.646", "0.542"],
          ["GARCH(1,1)","1.415", "0.602", "0.444"],
          ["Naive",     "1.621", "0.648", "0.478"],
        ],
        best: 0,
      },
      {
        title: "Earnings Sentiment Backtest (60 weeks)",
        columns: ["Strategy", "Ann. Sharpe", "Hit Rate", "Cum. Return", "Max Drawdown"],
        rows: [
          ["FinBERT signal",    "−0.66", "50.0%", "−13.3%", "−15.9%"],
          ["Random benchmark",  "+0.07", "48.3%", "−0.4%",  "−15.1%"],
        ],
        honestNote: "Signal underperformed. Shared drawdown profile with the random benchmark indicates macro regime drove losses, not signal failure. 60 tradeable weeks is insufficient for statistical significance — a longer history is needed before drawing alpha conclusions.",
        best: null,
      },
    ],
  },

  /* ── Governance Philosophy ──────────────────────────────── */
  philosophy: {
    heading: "Governance Philosophy",
    subheading: "How I think about model risk.",
    points: [
      {
        icon: "◈",
        title: "Honest negative results",
        body: "A backtest that fails is data. The earnings sentiment signal returned −0.66 Sharpe — that's documented, explained, and kept in the portfolio. Cherry-picking results is how production incidents happen.",
      },
      {
        icon: "◈",
        title: "Calibration before confidence",
        body: "A model that outputs 0.95 confidence on a 70%-accurate prediction is dangerous in production. Every model in this portfolio has ECE measured, and high-capacity models have temperature or Platt scaling applied before deployment.",
      },
      {
        icon: "◈",
        title: "Leakage is silent",
        body: "All splits are written to disk once, all scalers and vectorizers fit on train only, all targets computed from strictly future data. Leakage doesn't announce itself — it inflates your metrics and fails in deployment.",
      },
      {
        icon: "◈",
        title: "SR 11-7 as a design constraint",
        body: "Model development, independent validation, and ongoing monitoring aren't checkboxes — they're structural. The governance toolkit implements all three programmatically: reproducible, auditable, and statistically evidenced.",
      },
    ],
  },

  /* ── Stack ──────────────────────────────────────────────── */
  stack: {
    heading: "Stack",
    categories: [
      {
        label: "ML & NLP",
        items: ["PyTorch", "Transformers", "Scikit-Learn", "LightGBM", "SHAP", "OpenAI API"],
      },
      {
        label: "Quant",
        items: ["GARCH (arch)", "yfinance", "HAR features", "TimeSeriesSplit", "Backtesting"],
      },
      {
        label: "MLOps",
        items: ["MLflow", "FastAPI", "Pydantic", "Uvicorn", "SHA256 caching"],
      },
      {
        label: "Governance",
        items: ["SR 11-7", "Evidently", "ECE / Netcal", "PSI / KS", "Jinja2 reports"],
      },
      {
        label: "Data",
        items: ["Pandas", "NumPy", "Hugging Face Datasets", "ROUGE", "BERTScore"],
      },
      {
        label: "Languages & Tools",
        items: ["Python", "SQL", "Git", "GitHub Actions", "Jupyter"],
      },
    ],
  },

  /* ── Contact ────────────────────────────────────────────── */
  contact: {
    heading: "Get in Touch",
    subheading: "Open to quant research, ML engineering, and model risk roles.",
    email:    "tookediran@gmail.com",
    linkedin: "https://www.linkedin.com/in/tunmbi-okediran-676423146/",
    github:   "https://github.com/OkediranTunmbi",
    repoNote: "All project code is public on GitHub.",
  },

  /* ── Footer ─────────────────────────────────────────────── */
  footer: {
    name:  "Tunmbi Okediran",
    note:  "Built with vanilla HTML/CSS/JS. No frameworks. No trackers.",
    year:  new Date().getFullYear(),
  },
};

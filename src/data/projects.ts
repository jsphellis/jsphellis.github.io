export interface Project {
  slug: string
  title: string
  period: string
  summary: string
  takeaway: string
  stack: string[]
  code: string
  sections: {
    title: string
    paragraphs: string[]
    results?: {
      caption: string
      metrics: {
        name: string
        max: number
        bars: { label: string; value: number; display: string; lead?: boolean }[]
      }[]
    }
  }[]
  related?: { href: string; label: string }
}

// Public project summaries only. Employment details belong in the short Work section.
export const projects: Project[] = [
  {
    slug: 'multi-agent-research',
    title: 'Multi-Agent LLM Research Framework',
    period: '2025–2026',
    summary: 'A research framework for language-model agents playing a social deduction game. I developed game logic, agent reasoning modules, and an evaluation pipeline to compare how agents use incomplete information.',
    takeaway: 'Compared agent behavior across 499 games and five configurations.',
    stack: ['Python', 'Mistral-7B', 'LoRA / PEFT', 'LangChain'],
    code: 'https://github.com/jsphellis/MetaMafia',
    sections: [
      {
        title: 'The question',
        paragraphs: ['Can language-model agents reason about what other players know, defend a claim, and change a group’s decision? One-Night Ultimate Werewolf provided a bounded setting: players have hidden roles, limited information, and a shared decision to make.'],
      },
      {
        title: 'The system',
        paragraphs: [
          'The framework combines a game engine with agents ranging from a random baseline to memory-enhanced and LoRA fine-tuned models. The engine handles phases, voting, and role reveals, while the agents produce actions and dialogue within those rules.',
          'The reasoning modules track claims and accusations, update beliefs about player roles, and check for contradictions. A separate evaluation pipeline records persuasion, consensus, and rule compliance, allowing comparisons beyond the final winner.',
        ],
      },
      {
        title: 'What the experiments showed',
        paragraphs: [
          'The project report covers 499 games across five configurations. These are results within this game and evaluation setup, not measures of general reasoning ability.',
          'Villager win rate stayed at 99–100% across all configurations, including random agents. That made it unhelpful for distinguishing agent quality. Persuasion and consensus exposed differences that the outcome metric concealed.',
        ],
        results: {
          caption: 'Random baseline vs. LoRA fine-tuned, across 499 games',
          metrics: [
            {
              name: 'Persuasion score',
              max: 0.25,
              bars: [
                { label: 'Random baseline', value: 0.052, display: '0.052' },
                { label: 'LoRA fine-tuned', value: 0.223, display: '0.223', lead: true },
              ],
            },
            {
              name: 'Group consensus',
              max: 100,
              bars: [
                { label: 'Random baseline', value: 45.2, display: '45.2%' },
                { label: 'LoRA fine-tuned', value: 80.0, display: '80.0%', lead: true },
              ],
            },
          ],
        },
      },
      {
        title: 'A more reproducible successor',
        paragraphs: ['In NewMafia, I separated the game engine from the agent infrastructure and made capabilities such as memory and reflection independently configurable. Seeded runs, experiment manifests, and tests for state and voting make it easier to repeat a run and isolate what changed.'],
      },
    ],
    related: { href: 'https://github.com/jsphellis/NewMafia', label: 'Explore NewMafia on GitHub' },
  },
  {
    slug: 'chatdb', title: 'ChatDB', period: '2025',
    summary: 'A natural-language interface to an NBA database. I built the data preparation pipeline, SQL generation, and a Streamlit interface that shows the query alongside its explanation.',
    takeaway: 'Separate paths for reading, exploring, and modifying data.',
    stack: ['Python', 'MySQL', 'OpenAI', 'Streamlit'],
    code: 'https://github.com/jsphellis/NBA-SQL-RAG',
    sections: [
      {
        title: 'The question',
        paragraphs: ['How can someone explore an NBA database without knowing its schema or writing SQL? ChatDB connects conversational requests to a structured dataset while showing the database query behind the answer.'],
      },
      {
        title: 'From box scores to a database',
        paragraphs: ['The data pipeline collects and cleans traditional and advanced box scores, removes duplicate columns and rows, and merges the results into tables with primary keys. Preparing that structure gives query generation a concrete schema to work against.'],
      },
      {
        title: 'Making generated queries inspectable',
        paragraphs: ['A regex-based intent classifier separates query, exploration, and modification requests. The language model receives table, column, and example-query context, then generates SQL with an explanation. The Streamlit interface keeps that translation visible rather than presenting an answer without its source.'],
      },
      {
        title: 'Treating writes differently',
        paragraphs: ['Modification queries receive additional safety validation. A read and a destructive operation have different consequences, so routing them separately is an important part of the design. This remains a project implementation, not a guarantee that model-generated SQL is safe for arbitrary production databases.'],
      },
    ],
  },
  {
    slug: 'nbar', title: 'NBAR', period: '2025',
    summary: 'An NBA data pipeline packaged for use in R. I connected scheduled box-score collection, data cleaning, and package distribution so the analysis starts with reusable data.',
    takeaway: 'An installable package with scheduled collection and testthat tests.',
    stack: ['R', 'Python', 'GitHub Actions', 'testthat'],
    code: 'https://github.com/jsphellis/NBAR',
    sections: [
      {
        title: 'The question',
        paragraphs: ['Comparing player performance with betting lines needs consistent historical data. A one-time notebook can answer a question about one snapshot; this project focuses on preparing data for repeated analysis.'],
      },
      {
        title: 'Collection and packaging',
        paragraphs: ['Scheduled GitHub Actions collect NBA box scores. Cleaning and preprocessing turn those records into data distributed with an R package, alongside the functions used to analyze them. The repository includes package metadata, exported functions, and testthat tests.', 'The package can be installed from GitHub. This makes the work usable outside the original development environment without asking another person to reconstruct the scraping and cleaning steps.'],
      },
      {
        title: 'What I took from it',
        paragraphs: ['The main contribution is the path from collection to reusable data. Scheduling, packaging, and testing are part of the analysis tool, rather than setup work each user has to repeat. The project supports exploratory analysis; it does not establish profitable betting performance.'],
      },
    ],
  },
  {
    slug: 'tiktok-virality', title: 'TikTok Video Virality Study', period: '2024–2025',
    summary: 'A computer-vision study of whether video content can predict engagement. The project combines a custom dataset, two definitions of virality, and fine-tuning of a pretrained video model.',
    takeaway: 'The evaluation exposed prediction collapse rather than a reliable predictor.',
    stack: ['PyTorch', 'R(2+1)D-18', 'Computer vision', 'Pandas'],
    code: 'https://github.com/jsphellis/ViralityAnalysis',
    sections: [
      {
        title: 'The question',
        paragraphs: ['Could a model estimate a TikTok video’s engagement from its visual content? This collaborative academic study explored that question through both regression and binary classification. The report was co-authored with Dylan McIntosh, Samuel Bernsen, Karen Ngo, and Spencer Au.'],
      },
      {
        title: 'Defining the target',
        paragraphs: ['Engagement is not a single label. The continuous target combines transformed likes, views, shares, and comments, while the classification target marks videos above the median on every engagement measure. Each definition encodes a different interpretation of popularity.'],
      },
      {
        title: 'Training and evaluation',
        paragraphs: ['The implementation adapts an R(2+1)D-18 model pretrained on Kinetics-400. Video preprocessing samples fixed-length clips and pads shorter inputs. The report evaluates regression errors and classification metrics, then checks individual predictions.', 'The classifier’s reported ROC-AUC was 0.4908, and the regression model produced the same prediction across the examined examples. The experiment did not establish a useful virality predictor. It did show why inspecting model outputs matters alongside aggregate scores.'],
      },
    ],
    related: { href: '/blog/tiktok-virality/', label: 'Read the study summary and full report' },
  },
]

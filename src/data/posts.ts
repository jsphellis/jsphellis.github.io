export const viralityPost = {
  slug: 'tiktok-virality',
  title: 'The Viral Vision: Computer Vision Models and the Cultural Zeitgeist',
  date: 'March 4, 2024',
  category: 'Machine Learning',
  readTime: '4 min summary',
  excerpt: 'A video-model experiment that struggled to distinguish viral content, and what the results reveal about defining the target and checking predictions.',
  pdf: '/blog/TikTokVirality/Report.pdf',
  intro: 'Can a model predict how a TikTok video performs from the video itself? Our study tested a pretrained video model against two definitions of virality. Neither version became a useful predictor. The more useful result was understanding where the experiment broke down.',
  authors: 'Joseph Ellis, Dylan McIntosh, Samuel Bernsen, Karen Ngo, and Spencer Au',
  sections: [
    {
      title: 'What counts as viral?',
      paragraphs: [
        'We used likes, views, shares, and comments to construct two targets. For regression, engagement counts were log-transformed and scaled before being combined: likes received 40% of the weight, views 30%, shares 20%, and comments 10%. The resulting score was scaled between zero and one.',
        'For classification, a video was labeled viral only if every engagement measure exceeded its median. The resulting dataset contained roughly twice as many non-viral videos as viral ones. These definitions measure engagement in this dataset; they do not recover TikTok’s recommendation algorithm.',
      ],
    },
    {
      title: 'The experiment',
      paragraphs: [
        'We adapted an R(2+1)D video network pretrained on Kinetics-400. Preprocessing resized frames to 112 × 112, sampled clips of 32 frames, and padded shorter clips. The output layers were adapted for a continuous score or binary classification.',
        'The model received visual input. Engagement statistics supplied the training targets, not additional prediction features. Although the report discusses audio as a possible extension, this experiment did not use audio features.',
      ],
    },
    {
      title: 'What happened',
      paragraphs: [
        'Training plateaued early for both tasks. In the regression examples we examined, the model returned the same value, 0.58, for every video. A single error score did not make that behavior obvious; comparing individual predictions did.',
        'Classification accuracy was 65.72%, but reported F1 and recall were both zero, and ROC-AUC was 0.4908. In an imbalanced dataset, accuracy alone can look respectable while the model fails to distinguish the classes. These results did not support using the model to predict virality.',
      ],
    },
    {
      title: 'What I would test next',
      paragraphs: [
        'The first step would be simple baselines and checks of the labels and preprocessing, before trying a more complex model. The report also proposes collecting more data, revisiting the target definition, and exploring audio and alternative architectures.',
        'The experiment does not prove that visual content is irrelevant to engagement. It shows that this dataset, target construction, and training setup did not produce a reliable predictor. Keeping that distinction clear is the main lesson I take from the study.',
      ],
    },
  ],
}

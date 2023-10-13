import TreeNode from './TreeView';

// const content = ```
// OVERVIEW: THEMATIC UNITS AND THEIR THEME STATEMENTS
// PHILIPPIANS 1:1–4:23 (Epistle)
// Theme: I, Paul, write to all of you who are God’s people at Philippi. I rejoice because my adverse circumstances have advanced the good news and because I know I shall remain victorious spiritually. Love and humbly serve one another taking Christ as your example. Beware of false teachers and of those people who live lustful lives. Instead, follow my example of dependence on Christ alone and of striving to become more like him. Rejoice always. I rejoice greatly because you have given me a very generous gift by way of Epaphroditus. Greetings and the Lord’s blessings to you all.
// EPISTLE CONSTITUENT 1:1–2 (Paragraph: Opening of the Epistle)
// Theme: I, Paul, write this letter to all of you who are God’s people at Philippi. May God our Father and Jesus Christ our Lord bless you.
// EPISTLE CONSTITUENT 1:3–4:20 (Part: Body of the Epistle)
// Theme: I rejoice because my adverse circumstances have advanced the good news and because I know I shall remain victorious spiritually, magnifying Christ through life or death. Love and humbly serve one another taking Christ as your example. Beware of false teachers and of those people who live lustful lives. Instead, follow my example of dependence on Christ alone and of striving to become more like him. Rejoice always. I rejoice greatly because you have given me a very generous gift by way of Epaphroditus.
// PART CONSTITUENT 1:3–11 (Expressive Section: Introduction to 1:12–4:20)
// Theme: I joyfully thank God because you have been working together with me to make known the good news, and I pray that God will enable you to know how to love one another appropriately and to completely understand how you should believe and act.
// SECTION CONSTITUENT 1:3–8 (Expressive Paragraph: Nucleus1 of 1:3–11)
// Theme: I thank God and rejoice because you have been working together with me to make known the good news from the first day until now.
// SECTION CONSTITUENT 1:9–11 (Expressive Paragraph: Nucleus2 of 1:3–11)
// Theme: I pray that God will enable you to know how to love one another more and more appropriately and to completely understand how you should believe and act.
// PART CONSTITUENT 1:12–26 (Expressive Section: Nucleus1 of 1:3–4:20)
// Theme: I rejoice because my adverse circumstances have actually advanced the good news and because I know I shall remain victorious spiritually and will magnify Christ through my life or my death. Though I desire to be with Christ, I know it is necessary for you that I remain alive in order to come and serve you and so you too will rejoice triumphantly.
// SECTION CONSTITUENT 1:12–14 (Expressive Paragraph: Nucleus1 of 1:12–26)
// Theme: I want you to realize that as a result of my imprisonment many more people have heard the good news.
// SECTION CONSTITUENT 1:15-18e (Expressive Paragraph: Nucleus2 of 1:12–26)
// Theme: Even though some believers proclaim the message about Christ because they are antagonistic toward me, at least they are proclaiming Christ, and so I rejoice.
// SECTION CONSTITUENT 1:18f-20 (Expressive Paragraph: Nucleus3 of 1:12–26)
// Theme: I will continue to rejoice because I know that I will remain completely victorious spiritually since I earnestly expect to boldly honor Christ whether by life or by death.
// SECTION CONSTITUENT 1:21–26 (Expressive Paragraph: Nucleus4 of 1:12–26)
// Theme: Though I desire to leave this world and be with Christ, it is more important that I remain alive to help you in your need. So I know that I shall remain alive and help you believe in Christ more firmly, and as a result you will rejoice triumphantly.
// PART CONSTITUENT 1:27–4:9 (Hortatory Subpart: Nucleus2 of 1:3–4:20)
// Theme: Love and agree with one another, and humbly serve one another taking Christ as your example. Beware of false teachers and beware of those people who live lustful lives. Instead, follow my example of depending on Christ alone for salvation and of becoming more and more like him. Do not worry, but rejoice always.
// SUBPART CONSTITUENT 1:27–30 (Hortatory Paragraph: Introduction to 2:1–4:9)
// Theme: Conduct yourselves just as you learned in the good news about Christ, unitedly and fearlessly resisting those who oppose you and the good news, since God is helping you in all your struggles.
// SUBPART CONSTITUENT 2:1–30 (Hortatory Division: Appeal1 of 1:27–4:9)
// Theme: Love and agree with one another, and humbly serve one another without arguing. Take Christ as your model in this. I dedicate my life to God together with you; therefore, let us all rejoice even though I may die. I expect to send Timothy to you soon and Epaphroditus right away. These are men who care for others’ welfare, not their own. Welcome and honor such men as these.
// DIVISION CONSTITUENT 2:1–16 (Hortatory Section: Appeal1 of 2:1–30)
// Theme: Love one another, agree with one another, and humbly serve one another since Christ has loved us and humbly given himself for us in death on a shameful cross. Obey God and your leaders always and never complain against them or argue with them, but witness in life and word to the ungodly people around you.
// SECTION CONSTITUENT 2:1–4 (Hortatory Paragraph: Appeal1 of 2:1–16)
// Theme: Since Christ loves and encourages us and the Holy Spirit fellowships with us, make me completely happy by agreeing with one another, loving one another, and humbly serving one another.
// SECTION CONSTITUENT 2:5–11 (Hortatory Paragraph: Appeal2 of 2:1–16)
// Theme: You should think just as Christ Jesus thought, who willingly gave up his divine prerogatives and humbled himself, willingly obeying God though it meant dying on a shameful cross. As a result God exalted him to the highest position, to be acknowledged by all the universe as the supreme Lord.
// SECTION CONSTITUENT 2:12–13 (Hortatory Paragraph: Appeal3 of 2:1–16)
// Theme: Since you have always obeyed God, continue to strive to do those things which are appropriate for people whom God has saved, since he will enable you to do so.
// SECTION CONSTITUENT 2:14–16 (Hortatory Paragraph: Appeal4 of 2:1–16)
// Theme: Obey God and your leaders always and never complain against them or argue with them, in order that you may be perfect children of God, witnessing in life and word to the ungodly people among whom you live.
// DIVISION CONSTITUENT 2:17–18 (Hortatory Paragraph: Appeal2 of 2:1–30)
// Theme: Because I and all of you dedicate ourselves together to do God’s will, even if I am to be executed I rejoice and you should also rejoice.
// DIVISION CONSTITUENT 2:19–30 (Section: Appeal3 of 2:1–30)
// Theme: I confidently expect to send Timothy to you soon. He genuinely cares for your welfare, not his own interests. I am sending Epaphroditus back to you. Welcome him joyfully. Honor him and all those like him since he nearly died while serving me on your behalf.
// SECTION CONSTITUENT 2:19–24 (Commissive Paragraph: Nucleus1 of 2:19–30)
// Theme: I confidently expect that the Lord Jesus will enable me to send Timothy to you soon. He genuinely cares for your welfare, not his own interests. I am confident that the Lord will enable me also to come soon.
// SECTION CONSTITUENT 2:25–30 (Hortatory Paragraph: Nucleus2 of 2:19–30)
// Theme: Since Epaphroditus longs to see you and is distressed, I am sending him back to you. Therefore welcome him very joyfully. Honor him and all people like him since he nearly died while serving me on your behalf.
// SUBPART CONSTITUENT 3:1–4:1 (Hortatory Division: Appeal2 of 1:27–4:9)
// Theme: Beware of those people who are trying to harm you by teaching that you must be circumcised. Also beware of those who are living lustful lives. Instead, follow my example of becoming more and more like Christ and depending on him alone for a right relationship with God. Our certain hope is that Christ will transform our earthly bodies to be like his heavenly body.
// DIVISION CONSTITUENT 3:1 (Propositional Cluster: Introduction to 3:2–21)
// Theme: As for the other matters, continue to rejoice and know that it is not tiresome for me and it is safe for you to mention them again.
// DIVISION CONSTITUENT 3:2–11 (Hortatory Section: Appeal1 of 3:1–4:1)
// Theme: Beware of those unholy people who will harm you spiritually by insisting that you must be circumcised in order to become God’s people. We are already God’s people not because we rely on ourselves at all but because we give up ourselves in order that we may know Christ and be united with him, relying on him alone to be made righteous and become his people, as my example shows.
// SECTION CONSTITUENT 3:2 (Hortatory Propositional Cluster: Appeal of 3:2–11)
// Theme: Beware of those unholy people who will harm you spiritually by insisting that you must be circumcised in order to become God’s people.
// SECTION CONSTITUENT 3:3-4a (Expository Propositional Cluster: Basis1 for 3:2)
// Theme: It is we who worship God through his Spirit and glorify Christ Jesus rather than depending on our own selves who are truly God’s people.
// SECTION CONSTITUENT 3:4b-11 (Expository Paragraph Cluster: Basis2 for 3:2)
// Theme: Although, if it were beneficial for salvation, I could rely upon my own attainments better than anyone else could, I consider all those attainments worthless because I want to know Christ and be united with him, made righteous through trusting in Christ alone.
// PARAGRAPH CLUSTER CONSTITUENT 3:4b-6 (Expository Paragraph: Concession to 3:7–11)
// Theme: If it were beneficial for salvation, I could rely upon what I have done and who I am better than anyone else could rely upon himself, since I was circumcised properly and have a purely Hebrew ancestry and I kept the law blamelessly.
// PARAGRAPH CLUSTER CONSTITUENT 3:7–11 (Expository Paragraph: Contraexpectation to 3:4b-6)
// Theme: I consider all these things which I used to think of as advantageous, and everything else as well, to be worthless because I want to know Christ and be united with him, made righteous through trusting in Christ alone.
// DIVISION CONSTITUENT 3:12–21 (Hortatory Section: Appeal2 of 3:1–4:1)
// Theme: Follow my example of constantly striving to become more and more like Christ rather than following the bad example of those who are lustful and think only about earthly things. As for us, Christ will transform our earthly bodies to be like his heavenly body.
// SECTION CONSTITUENT 3:12–16 (Hortatory Paragraph: Appeal1 of 3:12–21)
// Theme: Since you desire to be perfected and since you have my example of not considering that I am already perfect but of constantly striving to become more and more like Christ, follow my example.
// SECTION CONSTITUENT 3:17–21 (Hortatory Paragraph: Appeal2 of 3:12–21)
// Theme: Imitate me and those who live as I do since there are many people who are bad examples as shown by their lustful behavior, thinking only about earthly things. As for us, Christ will transform our lowly earthly bodies to be like his glorious heavenly body.
// DIVISION CONSTITUENT 4:1 (Hortatory Paragraph: Summary of 3:1–21)
// Theme: My dear friends, on the basis of all that I have told you [3:1–21], continue to believe firmly in the Lord Jesus Christ according to what I have just taught you [3:1–21] and act accordingly.
// SUBPART CONSTITUENT 4:2–9 (Hortatory Section: Appeal3 of 1:27–4:9)
// Theme: I urge Euodia and Syntyche to be reconciled with each other. Rejoice always and be gentle to everyone. Do not worry; pray instead. Think about all that is good and practice whatever you have learned from me and God will be with you and grant you peace.
// SECTION CONSTITUENT 4:2–3 (Hortatory Paragraph: Appeal1 of 4:2–9)
// Theme: I urge Euodia and Syntyche to be reconciled with each other since they belong to the Lord, and I request that you, faithful comrade, help them in this since they have both proclaimed the good news faithfully together with me and my other fellow workers.
// SECTION CONSTITUENT 4:4–7 (Hortatory Paragraph: Appeal2 of 4:2–9)
// Theme: The Lord is near. Always rejoice, be gentle to everyone. Do not worry about anything, but pray to God instead. As a result, God will grant you profound peace.
// SECTION CONSTITUENT 4:8–9 (Hortatory Paragraph: Appeal3 of 4:2–9)
// Theme: Continually think about everything that is good and praiseworthy. Continually practice whatever you have learned from me. As a result, God will be with you and give you peace.
// PART CONSTITUENT 4:10–20 (Expressive Section: Nucleus3 of 1:3–4:20)
// Theme: I rejoice greatly because, even though Christ enables me to be content in every situation, you have given me a very generous gift by way of Epaphroditus, just as you have helped me from the very beginning. God will abundantly supply your every need also. Let us praise him forever and ever.
// SECTION CONSTITUENT 4:10–14 (Expressive Paragraph: Reaction1 of 4:10–20)
// Theme: I rejoice greatly because you have once again demonstrated your concern for me by giving to meet my needs, though it is true that Christ enables me to be content in every situation.
// SECTION CONSTITUENT 4:15–17 (Expressive Paragraph: Reaction2 of 4:10–20)
// Theme: You Philippians yourselves know that in the early days of preaching the good news in your region you were the only congregation that sent me gifts; not that I desire your gifts but I desire that God would abundantly bless you for aiding me.
// SECTION CONSTITUENT 4:18–20 (Expressive Paragraph: Reaction3 of 4:10–20)
// Theme: I have received your very generous gift; God is very pleased with this gift, and he will abundantly supply your every need also. Let us praise him forever and ever.
// EPISTLE CONSTITUENT 4:21–23 (Expressive Section: Closing of the Epistle)
// Theme: In closing, all of us here greet all of you. May the Lord Jesus Christ bless you spiritually.
// SECTION CONSTITUENT 4:21–22 (Expressive Paragraph: Reaction1 (greetings) of 4:21–23)
// Theme: I and all of the rest of God’s people here, including those who serve God with me and those who work at the emperor’s palace, greet each one of God’s people there.
// SECTION CONSTITUENT 4:23 (Expressive Paragraph: Reaction2 (benediction) of 4:21–23)
// Theme: May the Lord Jesus Christ bless you spiritually.
// ```;

const data = {
  label: 'Epistle Constituent',
  passage: 'PHIL 1:1-4:23',
  children: [
    {
      label: 'Part Constituent',
      passage: 'PHIL 1:3-4:20',
      children: [
        {
          label: 'Section Constituent',
          passage: 'PHIL 1:1-2',
        },
        {
          label: 'Paragraph',
          passage: 'PHIL 1:3-8',
        },
        {
          label: 'Paragraph',
          passage: 'PHIL 1:9-11',
        },
        {
          label: 'Section',
          passage: 'PHIL 1:12-26',
          children: [
            {
              label: 'Paragraph',
              passage: 'PHIL 1:12-14',
            },
            {
              label: 'Paragraph',
              passage: 'PHIL 1:15-18',
            },
            {
              label: 'Paragraph',
              passage: 'PHIL 1:18-20',
            },
            {
              label: 'Paragraph',
              passage: 'PHIL 1:21-26',
            },
          ],
        },
        {
          label: 'Subpart Constituent',
          passage: 'PHIL 1:27-30',
        },
        {
          label: 'Division Constituent',
          passage: 'PHIL 2:1-30',
          children: [
            {
              label: 'Section',
              passage: 'PHIL 2:1-16',
              children: [
                {
                  label: 'Paragraph',
                  passage: 'PHIL 2:1-4',
                },
                {
                  label: 'Paragraph',
                  passage: 'PHIL 2:5-11',
                },
                {
                  label: 'Paragraph',
                  passage: 'PHIL 2:12-13',
                },
                {
                  label: 'Paragraph',
                  passage: 'PHIL 2:14-16',
                },
              ],
            },
            {
              label: 'Paragraph',
              passage: 'PHIL 2:17-18',
            },
            {
              label: 'Section',
              passage: 'PHIL 2:19-30',
              children: [
                {
                  label: 'Paragraph',
                  passage: 'PHIL 2:19-24',
                },
                {
                  label: 'Paragraph',
                  passage: 'PHIL 2:25-30',
                },
              ],
            },
            {
              label: 'Section',
              passage: 'PHIL 3:1-4:1',
              children: [
                {
                  label: 'Propositional Cluster',
                  passage: 'PHIL 3:1',
                },
                {
                  label: 'Section',
                  passage: 'PHIL 3:2-11',
                  children: [
                    {
                      label: 'Propositional Cluster',
                      passage: 'PHIL 3:2',
                    },
                    {
                      label: 'Propositional Cluster',
                      passage: 'PHIL 3:3-4a',
                    },
                    {
                      label: 'Paragraph',
                      passage: 'PHIL 3:4b-6',
                    },
                    {
                      label: 'Paragraph Cluster Constituent',
                      passage: 'PHIL 3:7-11',
                    },
                  ],
                },
                {
                  label: 'Section',
                  passage: 'PHIL 3:12-21',
                  children: [
                    {
                      label: 'Paragraph',
                      passage: 'PHIL 3:12-16',
                    },
                    {
                      label: 'Paragraph',
                      passage: 'PHIL 3:17-21',
                    },
                  ],
                },
                {
                  label: 'Paragraph',
                  passage: 'PHIL 4:1',
                },
              ],
            },
            {
              label: 'Section',
              passage: 'PHIL 4:2-9',
              children: [
                {
                  label: 'Paragraph',
                  passage: 'PHIL 4:2-3',
                },
                {
                  label: 'Paragraph',
                  passage: 'PHIL 4:4-7',
                },
                {
                  label: 'Paragraph',
                  passage: 'PHIL 4:8-9',
                },
              ],
            },
            {
              label: 'Section',
              passage: 'PHIL 4:10-20',
              children: [
                {
                  label: 'Paragraph',
                  passage: 'PHIL 4:10-14',
                },
                {
                  label: 'Paragraph',
                  passage: 'PHIL 4:15-17',
                },
                {
                  label: 'Paragraph',
                  passage: 'PHIL 4:18-20',
                },
              ],
            },
            {
              label: 'Section Constituent',
              passage: 'PHIL 4:21-22',
            },
            {
              label: 'Paragraph',
              passage: 'PHIL 4:23',
            },
          ],
        },
      ],
    },
  ],
};

const enrichedData = {
  label: 'Epistle Constituent',
  passage: 'PHIL 1:1-4:23',
  children: [
    {
      label: 'Part Constituent',
      passage: 'PHIL 1:3-4:20',
      children: [
        {
          label: 'Section Constituent',
          passage: 'PHIL 1:1-2',
          theme: 'Opening of the Epistle',
        },
        {
          label: 'Paragraph',
          passage: 'PHIL 1:3-8',
          theme: 'Introduction to 1:12–4:20',
          sublabel: 'Nucleus1 of 1:3–11',
        },
        {
          label: 'Paragraph',
          passage: 'PHIL 1:9-11',
          theme: 'Introduction to 1:12–4:20',
          sublabel: 'Nucleus2 of 1:3–11',
        },
        {
          label: 'Section',
          passage: 'PHIL 1:12-26',
          theme: 'Nucleus1 of 1:3–4:20',
          children: [
            {
              label: 'Paragraph',
              passage: 'PHIL 1:12-14',
              theme: 'Nucleus1 of 1:12–26',
            },
            {
              label: 'Paragraph',
              passage: 'PHIL 1:15-18',
              theme: 'Nucleus2 of 1:12–26',
            },
            {
              label: 'Paragraph',
              passage: 'PHIL 1:18-20',
              theme: 'Nucleus3 of 1:12–26',
            },
            {
              label: 'Paragraph',
              passage: 'PHIL 1:21-26',
              theme: 'Nucleus4 of 1:12–26',
            },
          ],
        },
        {
          label: 'Subpart Constituent',
          passage: 'PHIL 1:27-30',
          theme: 'Nucleus2 of 1:3–4:20',
        },
        {
          label: 'Division Constituent',
          passage: 'PHIL 2:1-30',
          theme: 'Appeal1 of 1:27–4:9',
          children: [
            {
              label: 'Section',
              passage: 'PHIL 2:1-16',
              theme: 'Appeal1 of 2:1–30',
              sublabel: 'Appeal1 of 2:1–16',
            },
            {
              label: 'Paragraph',
              passage: 'PHIL 2:17-18',
              theme: 'Appeal2 of 2:1–30',
              sublabel: 'Appeal2 of 2:1–30',
            },
            {
              label: 'Section',
              passage: 'PHIL 2:19-30',
              theme: 'Appeal3 of 2:1–30',
              sublabel: 'Introduction to 2:19–30',
            },
            {
              label: 'Section',
              passage: 'PHIL 3:1-4:1',
              theme: 'Appeal2 of 1:27–4:9',
              children: [
                {
                  label: 'Propositional Cluster',
                  passage: 'PHIL 3:1',
                  theme: 'Introduction to 3:2–21',
                },
                {
                  label: 'Section',
                  passage: 'PHIL 3:2-11',
                  theme: 'Appeal1 of 3:1–4:1',
                  sublabel: 'Appeal1 of 3:2–11',
                },
                {
                  label: 'Section',
                  passage: 'PHIL 3:12-21',
                  theme: 'Appeal2 of 3:1–4:1',
                  sublabel: 'Appeal2 of 3:12–21',
                },
                {
                  label: 'Paragraph',
                  passage: 'PHIL 4:1',
                  theme: 'Summary of 3:1–21',
                },
              ],
            },
            {
              label: 'Section',
              passage: 'PHIL 4:2-9',
              theme: 'Appeal3 of 1:27–4:9',
              children: [
                {
                  label: 'Paragraph',
                  passage: 'PHIL 4:2-3',
                  theme: 'Appeal1 of 4:2–9',
                },
                {
                  label: 'Paragraph',
                  passage: 'PHIL 4:4-7',
                  theme: 'Appeal2 of 4:2–9',
                },
                {
                  label: 'Paragraph',
                  passage: 'PHIL 4:8-9',
                  theme: 'Appeal3 of 4:2–9',
                },
              ],
            },
            {
              label: 'Section',
              passage: 'PHIL 4:10-20',
              theme: 'Nucleus3 of 1:3–4:20',
              children: [
                {
                  label: 'Paragraph',
                  passage: 'PHIL 4:10-14',
                  theme: 'Reaction1 of 4:10–20',
                },
                {
                  label: 'Paragraph',
                  passage: 'PHIL 4:15-17',
                  theme: 'Reaction2 of 4:10–20',
                },
                {
                  label: 'Paragraph',
                  passage: 'PHIL 4:18-20',
                  theme: 'Reaction3 of 4:10–20',
                },
              ],
            },
            {
              label: 'Section Constituent',
              passage: 'PHIL 4:21-22',
              theme: 'Closing of the Epistle',
              sublabel: 'Reaction1 (greetings) of 4:21–23',
            },
            {
              label: 'Paragraph',
              passage: 'PHIL 4:23',
              theme: 'Closing of the Epistle',
              sublabel: 'Reaction2 (benediction) of 4:21–23',
              subtype: 'benediction',
            },
          ],
        },
      ],
    },
  ],
};

// Merge the enriched data with the existing data object
const mergedData = { ...data, ...enrichedData };

console.log(mergedData);

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen p-10">
      <h1 className="text-3xl font-bold mb-5">Nested Tree View</h1>
      <div className="bg-white p-5 rounded shadow">
        <TreeNode data={mergedData} />
      </div>
    </div>
  );
}

export default App;

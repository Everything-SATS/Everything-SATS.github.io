/* ---------- Everything SATS: reading passages ----------
   Original writing, purpose-built for this tool -- we never reproduce real
   exam papers or published books. Each question is tagged with the KS2
   content-domain code it practises (2a-2h).

   Held in its own file rather than inline in reading.html so the page stays
   editable as the collection grows towards 100 passages, and so browsers can
   cache the text separately from the app code.

   Shape of a passage:
     id      unique slug, also the localStorage progress key -- never reuse
     genre   "Fiction" | "Non-fiction" | "Poetry"
     title   shown on the card and in the passage popup
     teaser  one line on the card, no spoilers
     text    the passage itself (template literal, blank line between paras)
     questions[]  see reading.html for the supported question shapes
*/
const PASSAGES = [
  {
    id: "attic-key",
    genre: "Fiction",
    title: "The Attic Key",
    teaser: "A girl finds something unexpected while helping clear her grandmother's attic.",
    text: `Priya had never liked the attic.

It was the smell, mostly. Dust, old paper, and something underneath that reminded her of pencil shavings. A single bulb hung from the rafters on a twist of flex. Whenever the wind pushed at the roof tiles the bulb swung, and every shadow in the room leaned over and then leaned slowly back.

"Just the trunk left," her mum called up through the hatch. "Then we're done for today."

Her grandmother's house was being sold. That was the plain fact sitting underneath the whole week, and nobody in the family said it out loud more than they had to. Somebody had to sort through fifty years of boxes before the new owners arrived. So far the somebody had mostly been Priya.

She had filled four bin bags and three cardboard crates. She had found a bag of buttons, a tin of foreign coins, and ninety-one photographs of a dog nobody could name.

The trunk was heavier than it looked. Its brass corners had gone green with age, and the latch had rusted into a shape that no longer quite matched its own keyhole. Priya worked it loose with both thumbs, one slow millimetre at a time, until it gave with a noise like a cough.

Inside were blankets. Under the blankets was something hard and rectangular.

It was a wooden box, no bigger than a shoebox, the lid inlaid with a pale wood in a pattern of overlapping circles. There was a tiny keyhole set into the front. There was no key.

Priya lifted it out and held it in both hands. Something shifted inside with a soft, papery rustle — not the sound of coins or jewellery, but of paper moving against paper.

She turned the box over. She looked underneath. She ran a fingernail around the seam of the lid, and the lock held.

For a while she just sat with it on her knees, listening to her mum moving crockery around in the kitchen two floors below. There was a version of this where she carried the box downstairs, put it on the table, and let everyone crowd round while somebody fetched a screwdriver. She could picture it exactly. Somebody would joke about treasure. Somebody would say be careful, that's probably worth something.

She found she did not want that.

It was only when she went to fold the blankets back into the trunk that she noticed it. Taped to the underside of the trunk's lid, exactly where a hand would never go by accident, was a small brass key.

Priya sat very still.

Her grandmother had not lost the key. Losing a key was an accident, and accidents left keys in drawers, in coat pockets, in the bottom of handbags. This key had been measured against a hiding place and put there on purpose. Somebody had knelt where Priya was kneeling now, with a roll of tape, and thought carefully about where a key should live.

She remembered, suddenly and completely, her grandmother saying that a secret was not the same thing as a lie. A secret was just a true thing waiting for the right moment. Priya had been about six. She had not really understood it then, and she was not certain she understood it now, but she had never forgotten the sentence.

The key came away from the tape with a small dry sound.

It was warm in her palm, which was impossible — brass is never warm — and she knew perfectly well that the warmth was her own hand. She held it anyway, for longer than she needed to.

Downstairs, her mum ran the tap. A car went past. The bulb swung, and the shadows leaned and came back.

Priya turned the box to face her, fitted the key into the keyhole, and felt it slide the whole way in, as neatly as a word finishing a sentence.`,
    questions: [
      { code:"2b", type:"tick-one", marks:1, q:"Why is the family sorting through the attic?",
        options:["They are looking for a lost brass key.","Priya's grandmother's house is being sold.","They are checking the roof for storm damage.","They are searching for old family photographs."], correct:1,
        explanation:"The passage says: “Her grandmother's house was being sold... Somebody had to sort through fifty years of boxes before the new owners arrived.”" },
      { code:"2a", marks:1, q:"Find and copy one word from paragraph 6 that shows the latch on the trunk was stiff and old.", keywords:[["rusted"]], answerExpected:"rusted", answerGreaterDepth:"rusted (“the latch had rusted into a shape that no longer quite matched its own keyhole”)", steps:["Look at the paragraph describing Priya opening the trunk.","The latch had “rusted” — rust is what makes old metal stiff and hard to move."] },
      { code:"2b", type:"truefalse", marks:2, q:"Using information from the passage, tick one box in each row to show whether each statement is true or false.",
        statements:[
          {text:"The wooden box was bigger than a shoebox.", answer:false},
          {text:"Priya found the key taped underneath the trunk's lid.", answer:true},
          {text:"Priya took the box downstairs to open it with her family.", answer:false},
          {text:"Priya had already filled several bags and crates before finding the trunk.", answer:true},
        ],
        explanation:"Check each statement against the text: the box was “no bigger than a shoebox” (false); the key was “taped to the underside of the trunk's lid” (true); Priya pictured taking it downstairs but “found she did not want that” (false); and she “had filled four bin bags and three cardboard crates” (true)." },
      { code:"2d", marks:1, q:"Why does Priya decide her grandmother had not simply lost the key?", keywords:[["hidden","hid","on purpose","deliberate","taped","chosen","not an accident"]], answerExpected:"Because it was taped in a hiding place on purpose, not dropped by accident.", answerGreaterDepth:"Because a lost key turns up in drawers or pockets by accident, but this one had been taped somewhere a hand would never reach by chance — which means somebody chose that spot deliberately.", steps:["This is an inference — Priya works it out rather than being told.","Clue: the key was taped “exactly where a hand would never go by accident”.","Clue: she thinks about where lost keys actually end up — drawers, coat pockets, handbags. This one was placed, not dropped."] },
      { code:"2g", marks:1, q:"The writer says the key slid in “as neatly as a word finishing a sentence”. What impression does this give the reader?", keywords:[["right","fits","meant","complete","finished","ending","satisfying","belongs"]], answerExpected:"It makes the moment feel exactly right, like something being completed.", answerGreaterDepth:"It makes the key feel as though it belongs there — the comparison suggests completion and rightness, so the moment reads as the end of something rather than just the opening of a box.", steps:["This asks about the effect of a comparison, not what it means literally.","Finishing a sentence is a small, satisfying moment of something becoming complete.","Applying that to the key suggests everything has fallen into place exactly as it was meant to."] },
      { code:"2c", type:"order", marks:1, q:"Number these events 1–4 to show the order in which they happen in the passage.",
        items:["Priya works the rusted latch of the trunk loose.","Priya lifts out a wooden box with no key.","Priya notices the key taped under the trunk's lid.","Priya remembers what her grandmother said about secrets."],
        explanation:"Priya opens the trunk first, then finds the locked box inside, then spots the taped key while folding the blankets back, and only then does the memory of her grandmother's words come to her." },
      { code:"2d", marks:2, q:"The passage says Priya could picture taking the box downstairs exactly, but “found she did not want that”. What does this suggest about how she feels?", keywords:[["private","alone","herself","hers","secret","special"],["crowd","joke","everyone","spoil","ruin","not the same","treasure"]], answerExpected:"She wants the moment to be private, because a crowd joking about treasure would spoil it.", answerGreaterDepth:"It suggests the box already feels private and important to her, and that having everyone crowd round joking about treasure would turn something meaningful into something ordinary — so she chooses to keep the moment for herself.", steps:["Look at the version of events she imagines, and how it is described.","She pictures people crowding round, somebody joking about treasure, somebody fetching a screwdriver.","She rejects it — which suggests the box matters to her in a way that a noisy audience would spoil."] },
      { code:"2e", marks:2, q:"What do you think Priya will do next? Use evidence from the passage to support your answer.", keywords:[["open"],["alone","herself","own","by herself","nobody","private"]], answerExpected:"She will open the box on her own, because she has already decided not to take it downstairs.", answerGreaterDepth:"She will open the box alone in the attic. The passage has already shown her rejecting the idea of opening it downstairs, and it ends with the key sliding the whole way into the lock, so the next moment is almost certainly the lid coming up.", steps:["This is a prediction — use what the passage has already established, not a guess.","Evidence: she deliberately decided against carrying it down to her family.","Evidence: the final sentence has the key fitted and fully turned into the keyhole.","Together these point to her opening it alone, in the attic, right now."] },
      { code:"2h", marks:2, q:"Compare how Priya feels about the attic at the start of the passage with how she feels by the end.", keywords:[["dislike","never liked","didn't like","smell","dust","unpleasant","shadows"],["absorbed","interested","still","doesn't want to leave","stays","caught up","fascinated","curious"]], answerExpected:"At the start she dislikes the attic and its smell, but by the end she is so caught up in the box that she stays there.", answerGreaterDepth:"At the start the attic is somewhere she actively dislikes — the dust, the old paper, the swinging bulb and the leaning shadows. By the end the same details are still there, but she barely notices them: she sits “longer than she needed to”, choosing to stay in the attic rather than go down. Her feeling shifts from wanting to be out of the room to not wanting to leave it.", steps:["Find how the attic is described in the opening: “Priya had never liked the attic”, the smell, the swinging bulb, the leaning shadows.","Find what she is doing by the end: sitting still, holding the key longer than she needs to, choosing not to go downstairs.","Describe the shift — the room has not changed, but what she wants has."] }
    ]
  },
  {
    id: "deep-ocean",
    genre: "Non-fiction",
    title: "Life in the Deep Ocean",
    teaser: "An explanation of how creatures survive in total darkness, far beneath the waves.",
    text: `Sunlight only reaches the first two hundred metres of the ocean.

Below that is the twilight zone, where the light thins out to a dim blue and then to nothing at all. Past a thousand metres, the darkness is total. Scientists call this the midnight zone, and it is not a small place. It is the largest living space on Earth.

Nothing about it looks survivable. No plant can grow without sunlight. The temperature sits a degree or two above freezing. The weight of the water overhead is so great that it would crush an unprotected human body in an instant.

And yet the midnight zone is full of animals.

The first problem any creature down there has to solve is darkness. A surprising number of them solve it by making light of their own. Roughly three-quarters of the animals living in the open water of the deep sea are bioluminescent, which means they produce their own glow through a chemical reaction inside their bodies.

They do not all use it for the same thing.

Anglerfish grow a lure that hangs above their jaws like a small lit lamp. Prey swims towards the only interesting thing in a hundred metres of black water, and the jaws close. The light is bait.

Some deep-sea squid do almost the opposite. Instead of releasing dark ink like their shallow-water relatives, they release a cloud of glowing ink. A predator is left staring at a bright, spreading smear while the squid disappears into the dark behind it. The light is an escape.

Others use light as a signal, flashing patterns that seem to be used to find a mate, or to warn other animals off. A few species can even switch their glow on and off along their undersides to match the faint light filtering down from far above, so that anything hunting from below sees no silhouette at all.

The second problem is food.

Nothing photosynthesises in the dark, so almost nothing down there grows its own food. Most of what the midnight zone eats has to fall into it. Scientists call this marine snow: a slow, endless drift of dead plankton, scraps and waste, sinking from the sunlit water far above.

It is a beautiful name for something that is mostly rubbish.

Not all of it drifts. Occasionally something very large dies near the surface and sinks whole. A single whale carcass reaching the seabed can feed the animals around it for decades — an enormous, sudden windfall in a place that normally lives on crumbs.

Marine snow falls steadily, but it does not fall generously. A deep-sea animal may go weeks between meals, so the whole body plan of the midnight zone is built around not wasting energy. Many species barely move. They hang in the water and wait, with slow hearts and slack muscles, spending as little as possible.

Then, when a meal does arrive, they need to be able to take all of it.

This is why so many deep-sea fish look the way they do. The oversized jaws and the stretchy, balloon-like stomachs are not there to make them frightening. They are there because a fish that meets one large meal a month cannot afford to swallow only half of it. Some species can eat prey longer than their own bodies.

Every strange feature has a reason behind it, once you know what the animal is up against.

We still know remarkably little about any of this. Large parts of the deep sea have never been surveyed in detail, and expeditions regularly return with animals nobody has described before. Sailors reported glowing water for centuries before anyone could explain what caused it.

Almost everything we do know has come from a few hundred submersible dives and a scattering of cameras lowered on cables. Set against the volume of water they were sent into, that is a very small number of looks.

The midnight zone is the biggest habitat on the planet, and it is also the one we have looked at least.`,
    questions: [
      { code:"2b", type:"tick-one", marks:1, q:"According to the passage, at what depth does the midnight zone begin?",
        options:["Below two hundred metres.","Below five hundred metres.","Below one thousand metres.","Below two thousand metres."], correct:2,
        explanation:"The passage says: “Past a thousand metres, the darkness is total. Scientists call this the midnight zone.”" },
      { code:"2a", marks:1, q:"What does \"bioluminescent\" mean, according to the passage?", keywords:[["own light","own glow","make light","makes light","produce light","produce their own","glow"]], answerExpected:"It means an animal makes its own light.", answerGreaterDepth:"It means an animal produces its own glow through a chemical reaction inside its body, rather than reflecting light from anywhere else.", steps:["The passage explains the word immediately after using it.","“Bioluminescent... means they produce their own glow through a chemical reaction inside their bodies.”"] },
      { code:"2b", type:"tick-two", marks:1, q:"According to the passage, what are two ways deep-sea animals use their own light? Tick two.",
        options:["To lure prey close enough to catch.","To confuse a predator with glowing ink.","To keep their bodies warm in freezing water.","To grow food in the absence of sunlight.","To make the water pressure easier to survive."], correct:[0,1],
        explanation:"The passage describes an anglerfish's lure — “the light is bait” — and squid that “release a cloud of glowing ink” so they can escape — “the light is an escape.”" },
      { code:"2d", marks:1, q:"Why do some deep-sea animals switch their glow on along their undersides?", keywords:[["hide","hidden","camouflage","blend","match","silhouette","not be seen","invisible"]], answerExpected:"So that hunters below cannot see their dark outline against the light above.", answerGreaterDepth:"To hide themselves: by matching the faint light coming down from above, their undersides stop showing as a dark silhouette to any predator looking up at them.", steps:["Find the sentence about switching the glow on along the undersides.","It says they match “the faint light filtering down from far above”, so that anything hunting from below “sees no silhouette at all”.","Matching the background so you cannot be picked out is camouflage."] },
      { code:"2g", marks:1, q:"The writer says marine snow is “a beautiful name for something that is mostly rubbish”. Why do you think the writer points this out?", keywords:[["pretty","beautiful","nice","gentle","sounds"],["really","actually","truth","waste","dead","rubbish","reality","contrast"]], answerExpected:"To show that the pretty name hides what marine snow actually is.", answerGreaterDepth:"To draw attention to the gap between how gentle and lovely the name sounds and what it really describes — dead plankton, scraps and waste — which makes the reader look again at something they had accepted without thinking.", steps:["Look at what marine snow is actually made of, described just before this line.","“Dead plankton, scraps and waste” is not beautiful, but “snow” sounds soft and clean.","The writer points out the mismatch so the reader notices it instead of being carried along by the pretty name."] },
      { code:"2b", type:"truefalse", marks:2, q:"Using information from the passage, tick one box in each row to show whether each statement is true or false.",
        statements:[
          {text:"Plants grow on the floor of the midnight zone.", answer:false},
          {text:"Most food in the deep sea sinks down from the water above.", answer:true},
          {text:"Many deep-sea animals move constantly in order to find food.", answer:false},
          {text:"Some deep-sea fish can eat prey longer than their own bodies.", answer:true},
        ],
        explanation:"Check each against the text: “No plant can grow without sunlight” (false); most food falls in as marine snow from “the sunlit water far above” (true); “Many species barely move”, hanging in the water to save energy (false); and “Some species can eat prey longer than their own bodies” (true)." },
      { code:"2c", marks:2, q:"Summarise, in your own words, the two main problems the passage says deep-sea animals have to solve.", keywords:[["dark","darkness","no light","no sunlight"],["food","eat","meals","hunger","scarce"]], answerExpected:"They have to deal with total darkness, and with there being very little food.", answerGreaterDepth:"The first problem is darkness, which many solve by producing their own light for hunting, escaping or hiding. The second is a shortage of food, which they solve by moving as little as possible and being able to eat very large meals when one finally arrives.", steps:["The passage signposts both problems directly — look for the sentences that name them.","“The first problem any creature down there has to solve is darkness.”","“The second problem is food.”","Give each one, plus how the animals deal with it."] },
      { code:"2f", marks:2, q:"Explain why the writer describes the anglerfish and the squid one straight after the other.", keywords:[["different","opposite","contrast","compare","two ways","not the same"],["catch","hunt","prey","bait"],["escape","hide","run away","get away","defence"]], answerExpected:"To show two opposite uses of light: the anglerfish uses it to catch prey, the squid to escape.", answerGreaterDepth:"Putting them side by side makes the contrast obvious. The anglerfish's light draws prey in, so the light is bait; the squid's light pushes a predator away, so the light is an escape. Together they prove the writer's point that deep-sea animals “do not all use it for the same thing”.", steps:["Look at the sentence just before the two examples: “They do not all use it for the same thing.”","The anglerfish example ends “The light is bait.” The squid example ends “The light is an escape.”","The two are placed together, in the same shape of sentence, so the reader sees the opposite uses at once."] },
      { code:"2h", marks:2, q:"How is the deep-sea squid's use of ink different from that of its shallow-water relatives?", keywords:[["glowing","glows","bright","light","lit"],["dark","black","ordinary","normal","shallow"]], answerExpected:"Shallow-water squid release dark ink, but deep-sea squid release glowing ink instead.", answerGreaterDepth:"Shallow-water squid squirt dark ink, which hides them in lit water. In total darkness that would be useless, so deep-sea squid release glowing ink instead — the predator is left staring at a bright smear while the squid escapes into the dark behind it.", steps:["Find where the passage compares the two: “Instead of releasing dark ink like their shallow-water relatives...”","Shallow water: dark ink. Deep sea: a cloud of glowing ink.","Explain the difference the darkness makes — a dark cloud would not show up at all down there."] }
    ]
  },
  {
    id: "treehouse-blueprint",
    genre: "Fiction",
    title: "The Treehouse Blueprint",
    teaser: "William, Edie and Harry can't agree on how to build the perfect treehouse — until one idea changes everything.",
    text: `William had drawn the treehouse eleven times.

The drawings were spread across the kitchen table in the order he had made them, which meant you could watch the whole thing get more ambitious as your eye moved left to right. Version one was a box with a door. Version four had a rope ladder. Version seven added a pulley system for hauling snacks up from the garden, because coming back down for a biscuit was, he had decided, a design failure.

Version eleven had a periscope, made from an old cardboard tube and two mirrors he had found in the shed.

"It needs a trapdoor," said Edie.

She was seven, she was standing on a chair to see over his shoulder, and she had opinions about most things.

"Trapdoors are heavy," William said, without looking up. "You need proper hinges. Big ones. Dad's only got the little brass ones from the cupboard door."

"Then get bigger ones."

"You can't just get bigger ones, Edie."

"Why not?"

William opened his mouth, discovered that he did not have a good answer, and closed it again. This was, roughly, how the last three conversations had gone. Edie had a talent for asking questions that sounded simple and turned out not to be.

Harry arrived at half past ten with a bag of nails his dad had said they could have. He dropped it by the back door, came over to the table, and looked at version eleven for a long time without saying anything.

Then he said: "What if the ladder pulls up after you?"

William frowned. "What?"

"Like a drawbridge." Harry turned the drawing round so it faced him properly. "You'd still be able to shut yourself in. Nobody could follow you up. But it's a rope, not a door — so no hinges."

There was a pause.

It was, annoyingly, a much better idea than his.

William looked at the eleven drawings on the table, all of them solving the wrong problem in increasingly complicated ways, and started to laugh.

They got the frame up by the middle of the afternoon.

It was not elegant. Two of the uprights were slightly out of true, and there was a section near the back where the planks did not quite meet and probably never would. But it stood, and it took weight, and when Harry climbed onto the platform and jumped twice, nothing important fell off.

They agreed, without much discussion, not to mention the jumping test to anybody's parents. It had been a good test. It did not need describing.

Edie appointed herself chief nail-holder.

This was not a job anybody had offered her. She had invented it, announced it, and then performed it with the seriousness of somebody who had been doing it for thirty years. She held the tin. She passed nails one at a time. Twice she refused to hand one over because, in her professional judgement, the one William was asking for was the wrong length.

The second time, she was right.

By six o'clock the light had gone amber and the shadow of the oak had stretched all the way across the lawn. The treehouse had four walls, no roof, no ladder, and a doorway that was, in Harry's opinion, about four centimetres too narrow.

"We're not going to finish today," William said. He wiped sawdust off his hands and onto his shorts, which he would regret later.

Harry shrugged. "We've got all summer."

Edie was still holding a nail. She had been holding it for ten minutes, and she had turned down two separate requests for it, on grounds she had not fully explained.

Now she handed it over without being asked.

The argument about the trapdoor had happened that morning, and William could not have said exactly when it stopped mattering. Somewhere between the drawbridge and the nails, the thing on the table had stopped being his plan and started being theirs.`,
    questions: [
      { code:"2b", type:"tick-one", marks:1, q:"Why does William say they cannot have a trapdoor?",
        options:["The tree is not strong enough to hold one.","They do not have hinges big enough for it.","Edie is too young to be allowed one.","Harry has already said he does not want one."], correct:1,
        explanation:"William says: “Trapdoors are heavy... You need proper hinges. Big ones. Dad's only got the little brass ones from the cupboard door.”" },
      { code:"2a", marks:1, q:"Find and copy one word from the opening section that shows William's designs kept getting grander and more difficult.", keywords:[["ambitious"]], answerExpected:"ambitious", answerGreaterDepth:"ambitious (“you could watch the whole thing get more ambitious as your eye moved left to right”)", steps:["Look at the paragraph describing the eleven drawings spread across the table.","The word “ambitious” describes designs that keep aiming higher and asking for more."] },
      { code:"2b", type:"match", marks:2, q:"Using information from the passage, tick one box in each row to show whether each statement is about William, Edie or Harry.",
        columns:["William","Edie","Harry"],
        rows:[
          {text:"Drew the treehouse eleven times.", answer:"William"},
          {text:"Suggested a ladder that pulls up like a drawbridge.", answer:"Harry"},
          {text:"Refused to hand over a nail of the wrong length.", answer:"Edie"},
          {text:"Brought a bag of nails from home.", answer:"Harry"},
        ],
        explanation:"William “had drawn the treehouse eleven times”. Harry arrived “with a bag of nails his dad had said they could have” and suggested “What if the ladder pulls up after you? Like a drawbridge.” Edie “refused to hand one over because, in her professional judgement, the one William was asking for was the wrong length.”" },
      { code:"2d", marks:1, q:"Why does William start to laugh after Harry explains the drawbridge idea?", keywords:[["complicated","complex","overcomplicated","wrong problem","simple","obvious","easier","all along"]], answerExpected:"Because he realises all eleven of his drawings had been solving the wrong problem in complicated ways.", answerGreaterDepth:"Because Harry's simple idea shows him that his eleven increasingly complicated drawings had all been trying to solve the wrong problem — and he finds that funny rather than annoying.", steps:["This is an inference — the passage does not say directly why he laughs.","Look at what he does immediately before laughing: he looks at the eleven drawings, “all of them solving the wrong problem in increasingly complicated ways”.","He laughs at himself, once he sees how simple the answer actually was."] },
      { code:"2g", marks:1, q:"The writer says Harry's idea was “annoyingly” a much better idea than William's. What does this one word tell the reader about William?", keywords:[["admit","reluctant","didn't want","pride","proud","jealous","grudging","wounded"]], answerExpected:"He knows it is a better idea but does not really want to admit it.", answerGreaterDepth:"It shows both things at once: William genuinely thinks the idea is better, and his pride is a little stung that it was not his. The word admits the truth and complains about it in the same breath.", steps:["This asks about the effect of a single word choice.","Without “annoyingly”, the sentence would simply be William agreeing.","“Annoyingly” adds his hurt pride — he accepts the idea is better, but it costs him something to accept it."] },
      { code:"2c", type:"order", marks:1, q:"Number these events 1–4 to show the order in which they happen in the passage.",
        items:["Edie tells William the treehouse needs a trapdoor.","Harry arrives with a bag of nails.","The frame goes up and Harry jumps on the platform.","Edie hands over the nail without being asked."],
        explanation:"Edie's trapdoor argument comes first, in the morning at the kitchen table. Harry arrives at half past ten. The frame goes up by the middle of the afternoon. Edie hands the nail over at the very end, around six o'clock." },
      { code:"2h", marks:2, q:"Compare the way William approaches problems with the way Edie approaches them.", keywords:[["plans","planning","careful","practical","details","thinks","worries","complicated"],["direct","simple","determined","stubborn","just wants","expects","doesn't worry"]], answerExpected:"William plans carefully and worries about practical details, while Edie simply decides what she wants and expects it to happen.", answerGreaterDepth:"William works through the practical problems — hinges, weight, what his dad actually has in the cupboard — and draws the thing eleven times before building it. Edie goes straight to what she wants and does not see why the details should stop it: “Then get bigger ones.” His approach is cautious and detailed, hers is direct and immovable.", steps:["Find an example of how each of them handles the trapdoor problem.","William: “You need proper hinges. Big ones. Dad's only got the little brass ones.”","Edie: “Then get bigger ones.” — and when told she can't, “Why not?”","Describe the difference: careful planning against straightforward determination."] },
      { code:"2f", marks:2, q:"Explain why the writer ends the passage with Edie handing over the nail, rather than with the treehouse being finished.", keywords:[["together","team","shared","theirs","sharing","cooperat","working together","changed"],["not finished","unfinished","end","final","matters more","point"]], answerExpected:"It shows the three of them have started working together, which matters more than finishing the treehouse.", answerGreaterDepth:"The treehouse is deliberately left unfinished, because the passage is not really about the building. Edie giving up the nail she had guarded all afternoon, without being asked, is the moment the three of them become a team — which is why the final paragraph talks about the plan becoming “theirs” rather than his.", steps:["Notice what is missing from the ending: the treehouse has no roof and no ladder, and is not finished.","Notice what is there instead: Edie handing over the nail freely, after guarding it for ten minutes.","The last paragraph explains why that matters — the plan “had stopped being his plan and started being theirs”."] },
      { code:"2e", marks:2, q:"What do you think will happen with the treehouse after this passage ends? Use evidence to support your answer.", keywords:[["carry on","keep","continue","finish","more","again"],["together","three","all summer","team"]], answerExpected:"They will carry on building it together over the summer, because Harry says they have all summer.", answerGreaterDepth:"They will keep building it together and most likely finish it. Harry says “We've got all summer”, nobody is in a rush, and the final paragraph shows the three of them now working as a team rather than arguing — so the work is likely to continue in the same way.", steps:["This is a prediction — build it from evidence already in the passage.","Evidence: “We're not going to finish today.” / “We've got all summer.”","Evidence: the argument has ended and the plan has become “theirs”.","So the sensible prediction is that they carry on together, without hurry."] }
    ]
  },
  {
    id: "why-do-cats-purr",
    genre: "Non-fiction",
    title: "Why Do Cats Purr?",
    teaser: "Tilly researches a question her own cat asks her every evening — and discovers scientists don't fully agree on the answer.",
    text: `Tilly's class was set a project on animal behaviour, and she already knew what she wanted to ask.

Every evening, her cat climbed onto her lap, settled, and started up that low engine noise in his chest. She had heard it a thousand times. She had never once wondered how he was doing it, or why.

Why do cats purr?

The honest answer is that nobody is completely certain. That surprised her. She had expected a fact.

For a long time, the accepted explanation went like this. A signal travels from the cat's brain to the muscles around its voice box, telling them to twitch — open, closed, open, closed — around twenty-five times a second. Air moving past those twitching muscles, in both directions, produces the sound. That is why a purr carries on while the cat breathes in as well as out, which is unusual. Most animal noises stop when the animal inhales.

That explanation is still the one in most books. But in 2023 a research team found that pads of tissue in a cat's vocal folds could produce a purring sound in a larynx on its own, without any signal from a brain at all. It does not prove the older explanation wrong. It does mean the question is more open than it looked.

Tilly wrote that down carefully, because it seemed important that a proper answer was allowed to include "we are still working it out".

The bigger puzzle is not how cats purr. It is why.

Purring obviously happens when a cat is content. Curled on a lap, half asleep in a warm patch, being scratched behind the ear — this is the purring everybody knows.

But cats also purr when they are frightened. They purr at the vet. They purr when injured, and when giving birth, and sometimes when they are very ill indeed. A sound that simply meant "I am happy" would not turn up in all of those places.

One idea is that purring is not a statement about mood at all. It may be a request. Kittens purr from a few days old, long before they can do much else, and mother cats purr back. A purr may be less like a smile and more like a small, constant signal meaning stay here, I am fine, keep looking after me.

There is a second idea, and it is stranger. The frequency of a purr sits in a range that has been shown, in other contexts, to encourage bone and tissue to repair. Some researchers have suggested that a cat purring while hurt may be doing something genuinely useful for its own body — a low vibration that helps it heal while it rests.

This is a suggestion, not a settled fact, and Tilly was careful to write it that way.

Her friend Ocean, reading over her shoulder in the library, was unconvinced. "So when my cat purrs while the vet's holding her, that's not her being happy?"

"Probably not," Tilly said.

"Then what is it?"

Tilly thought about it. "Sort of like gritting your teeth. Only useful."

Big cats complicate it further. Lions and tigers cannot purr in the steady, unbroken way a house cat does — but they can roar, and a house cat cannot. The two abilities seem to sit at opposite ends of the same piece of anatomy. A cat tends to get one or the other.

Purring is also rarer than most people assume. Dogs cannot do it. A few other animals make something similar — raccoons and some rabbits among them — but true purring, the kind that continues unbroken through breathing in and breathing out, is almost entirely a cat thing.

Millie, half listening from the next table, asked whether hamsters could purr.

Tilly wrote that down too, in the margin, under a heading she had started that afternoon and labelled: things one school project cannot finish.`,
    questions: [
      { code:"2b", type:"tick-one", marks:1, q:"According to the passage, roughly how many times a second do the muscles around a cat's voice box twitch during a purr?",
        options:["About five times a second.","About twenty-five times a second.","About a hundred times a second.","About a thousand times a second."], correct:1,
        explanation:"The passage says the muscles twitch “open, closed, open, closed — around twenty-five times a second.”" },
      { code:"2a", marks:1, q:"What does \"content\" mean, based on how it is used in the passage?", keywords:[["happy","relaxed","comfortable","settled","calm","pleased"]], answerExpected:"happy and relaxed", answerGreaterDepth:"comfortable, settled and quietly happy — the passage shows it with a cat curled on a lap, half asleep in a warm patch", steps:["Look at the examples given straight after the word.","“Curled on a lap, half asleep in a warm patch, being scratched behind the ear.”","Those are all pictures of an animal that is comfortable and happy."] },
      { code:"2b", type:"truefalse", marks:2, q:"Using information from the passage, tick one box in each row to show whether each statement is true or false.",
        statements:[
          {text:"Scientists are completely certain how and why cats purr.", answer:false},
          {text:"A purr carries on while a cat is breathing in.", answer:true},
          {text:"Kittens only begin purring when they are fully grown.", answer:false},
          {text:"Dogs cannot purr.", answer:true},
        ],
        explanation:"Check each against the text: “nobody is completely certain” (false); a purr “carries on while the cat breathes in as well as out” (true); “Kittens purr from a few days old” (false); “Dogs cannot do it” (true)." },
      { code:"2d", marks:1, q:"Why does the fact that cats purr at the vet make the question harder to answer?", keywords:[["not happy","scared","frightened","stressed","hurt","doesn't fit","contradict","more than happy"]], answerExpected:"Because a cat at the vet is not happy, so purring cannot simply mean happiness.", answerGreaterDepth:"Because if purring only meant contentment, it would not appear in frightening or painful situations. A cat purring at the vet shows the simple explanation does not cover all the evidence.", steps:["This is an inference — you have to see why the evidence causes a problem.","The obvious explanation is that purring means the cat is happy.","But the passage lists purring when frightened, injured, giving birth and very ill.","A sound that meant only “I am happy” would not appear in those places, so the simple explanation cannot be the whole answer."] },
      { code:"2b", type:"tick-two", marks:1, q:"According to the passage, which two animals can do something similar to purring? Tick two.",
        options:["Dogs","Raccoons","Rabbits","Hamsters","Horses"], correct:[1,2],
        explanation:"The passage says: “A few other animals make something similar — raccoons and some rabbits among them.”" },
      { code:"2g", marks:1, q:"Tilly compares purring in a frightening situation to “gritting your teeth. Only useful.” Why is this a helpful comparison?", keywords:[["cope","coping","getting through","enduring","bear","not enjoying","not happy","familiar"]], answerExpected:"It explains an unfamiliar idea by comparing it to something people already do when coping with something hard.", answerGreaterDepth:"Gritting your teeth is something readers already understand as getting through something difficult rather than enjoying it. Applying that to a purr replaces the idea of happiness with the idea of coping — and “only useful” adds the possibility that the purr is actually doing the cat some good.", steps:["Think about what gritting your teeth means to a person: enduring something, not enjoying it.","That instantly moves the reader away from “purring means happy”.","“Only useful” then points at the healing idea — the cat may be helping itself, not just putting up with things."] },
      { code:"2c", marks:2, q:"Summarise, in your own words, the two ideas the passage gives for why cats might purr when they are not happy.", keywords:[["ask","request","signal","look after","attention","stay","communicat"],["heal","healing","repair","bone","tissue","recover","vibration"]], answerExpected:"One idea is that a purr is a request asking to be looked after. The other is that the vibration helps the cat's body heal.", answerGreaterDepth:"The first idea is that purring is not about mood but is a request — a signal used between kittens and mothers, meaning something like stay with me and keep looking after me. The second is that the frequency of a purr may encourage bone and tissue to repair, so an injured cat purring may be helping its own body recover.", steps:["The passage sets out two separate ideas after saying the bigger puzzle is why cats purr.","Idea one: “A purr may be less like a smile and more like a small, constant signal.”","Idea two: the frequency “has been shown... to encourage bone and tissue to repair”.","Put both into your own words."] },
      { code:"2f", marks:2, q:"Explain why the writer mentions the 2023 research, when the older explanation is “still the one in most books”.", keywords:[["still","open","not settled","not certain","changing","more to learn","unfinished","new"],["honest","fair","accurate","truth","up to date"]], answerExpected:"To show the question is still open and that science can change, rather than pretending the answer is settled.", answerGreaterDepth:"It shows the reader that an explanation being in most books does not make it final. Including research that complicates the accepted answer keeps the passage honest, and it sets up Tilly's point that a proper answer is allowed to include “we are still working it out”.", steps:["Notice what the 2023 study does: it does not disprove the old explanation, but it reopens the question.","Notice what Tilly writes down straight afterwards, about a proper answer including “we are still working it out”.","So the research is there to show the reader that not knowing yet is a real and acceptable part of science."] },
      { code:"2h", marks:2, q:"How is purring different from the noises most other animals make?", keywords:[["breathing in","inhale","in and out","both","unbroken","continues","carries on"],["stop","only","most animals","others"]], answerExpected:"Most animal noises stop when the animal breathes in, but a purr carries on in both directions.", answerGreaterDepth:"Most animal noises are made only on the out-breath and stop when the animal breathes in. A purr is unusual because it continues unbroken through breathing in as well as out — which the passage says is what makes true purring almost entirely a cat thing.", steps:["Find where the passage compares purring with other animal noises.","“That is why a purr carries on while the cat breathes in as well as out, which is unusual. Most animal noises stop when the animal inhales.”","State the difference clearly, using both halves of that comparison."] }
    ]
  },
  {
    id: "how-bees-make-honey",
    genre: "Non-fiction",
    title: "How Do Bees Make Honey?",
    teaser: "Harry's simple homework question turns out to have a surprisingly complicated answer.",
    text: `Harry had been given one question for homework: explain, in your own words, how bees make honey.

He assumed it would take two lines. Bees collect nectar. Nectar becomes honey. Finished, and out in the garden by four.

He was wrong about the two lines.

It starts with nectar, which is not honey and is not much like it. Nectar is a thin, sugary liquid that flowers produce on purpose, to make themselves worth visiting. It is a payment. The flower gets its pollen carried to the next flower, and the insect gets a drink.

Neither side is doing the other a favour. A flower that produces no nectar gets visited less, and pollinated less, and leaves fewer seeds behind it.

A worker bee heading out to collect it will visit dozens of flowers on a single trip, sometimes hundreds. She draws the nectar up through a tongue that works rather like a straw, and stores it in a pouch inside her body called a honey stomach.

This is not the stomach she digests her own food with. That is a separate organ, further along. The honey stomach is a container, not a gut — the nectar is cargo, and it is not hers.

Then she flies home, and hands it over.

This is the part Harry had not known about at all. The forager does not tip her load into a cell and go back out. She passes it, mouth to mouth, to a younger house bee waiting inside the hive. That bee holds it, works it, and passes it on again.

The nectar may be handed between several bees in turn. Each one adds enzymes from its own body, and those enzymes begin breaking the large, complex sugars in the nectar down into simpler ones. It is a chemical change, done in stages, by a chain of animals.

The passing does something else as well. Each handover spreads the liquid thinly across a bee's mouthparts, where the warm air of the hive can get at it. The drying has already started before the nectar reaches a cell at all.

Only after all that does the liquid go into a wax cell of the honeycomb.

And even then it is not honey.

Fresh nectar is mostly water. Honey has to be far thicker than that, because thin honey ferments and spoils, and a hive that loses its winter stores does not survive. So the bees dry it out.

They do this by fanning. Rows of bees beat their wings over the open cells, hour after hour, moving air across the surface so the water evaporates and the liquid slowly thickens. A hive on a warm evening can be loud with it — a sound like a distant motorway coming from a box in the corner of a garden.

When it is thick enough, and only then, the bees cap the cell with a thin lid of wax. Sealed like that, honey keeps for months. It has been found still edible in jars thousands of years old.

That is not luck. There is almost no water left in finished honey for anything to grow in, and the enzymes the bees added leave it slightly acidic. A capped cell is less a cupboard than a preservation system.

Harry read the last fact twice, and then went looking for the numbers.

A single worker bee produces about a twelfth of a teaspoon of honey in her entire life. Not a day. A life.

To fill one jar, the bees of a hive might visit around two million flowers between them.

He sat and looked at his notes for a while. He had started the afternoon expecting two lines, and he had ended up with three pages, a diagram he was quite proud of, and a slightly odd feeling about the toast he had eaten that morning.

Somewhere out there was a hive that had worked for weeks so that he could not particularly notice a spoonful of honey on a Tuesday.`,
    questions: [
      { code:"2b", type:"tick-one", marks:1, q:"According to the passage, what is a worker bee's honey stomach used for?",
        options:["Digesting the food the bee eats herself.","Carrying nectar back to the hive.","Making the wax for the honeycomb.","Producing the enzymes that change the sugars."], correct:1,
        explanation:"The passage says the honey stomach is “a container, not a gut — the nectar is cargo, and it is not hers”, and that it is “not the stomach she digests her own food with”." },
      { code:"2a", marks:1, q:"The passage says a forager bee collects nectar. What does \"forager\" mean here?", keywords:[["collect","gather","search","find","out","flowers"]], answerExpected:"A bee that goes out and collects nectar from flowers.", answerGreaterDepth:"A bee whose job is to leave the hive, search for flowers and gather nectar, then bring it home — the passage shows her visiting hundreds of flowers and then flying back to hand the load over.", steps:["Look at what the forager is described doing before and after the word is used.","She “will visit dozens of flowers on a single trip, sometimes hundreds”, then “flies home, and hands it over”.","A forager is the bee that goes out searching and collecting."] },
      { code:"2c", type:"order", marks:1, q:"Number these stages 1–4 to show the order in which they happen.",
        items:["A worker bee draws nectar up through her tongue.","The nectar is passed between bees who add enzymes.","The liquid is placed into a wax cell of the honeycomb.","The bees fan the cells until the liquid thickens."],
        explanation:"The nectar is collected from flowers first, then passed between bees who add enzymes, then placed into a wax cell, and only after that fanned dry until it thickens into honey." },
      { code:"2d", marks:1, q:"Why must the bees dry the nectar out before sealing it away?", keywords:[["spoil","ferment","go off","rot","last","keep","survive","winter"]], answerExpected:"Because thin honey ferments and spoils, so it would not last the winter.", answerGreaterDepth:"Because fresh nectar is mostly water, and thin honey ferments and spoils. If the hive's winter stores went off, the hive would not survive — so the honey has to be thick enough to keep.", steps:["Find the sentence explaining why thickness matters.","“Thin honey ferments and spoils, and a hive that loses its winter stores does not survive.”","So drying the nectar is what makes the food safe to store."] },
      { code:"2b", type:"truefalse", marks:2, q:"Using information from the passage, tick one box in each row to show whether each statement is true or false.",
        statements:[
          {text:"A honey stomach is the same organ a bee digests her food with.", answer:false},
          {text:"Nectar may be passed between several bees before it is stored.", answer:true},
          {text:"Fresh nectar is thicker than finished honey.", answer:false},
          {text:"Sealed honey can stay edible for a very long time.", answer:true},
        ],
        explanation:"Check each against the text: the honey stomach is “not the stomach she digests her own food with” (false); “The nectar may be handed between several bees in turn” (true); “Fresh nectar is mostly water. Honey has to be far thicker” (false); honey “has been found still edible in jars thousands of years old” (true)." },
      { code:"2g", marks:1, q:"The writer compares the sound of a hive fanning to “a distant motorway”. What does this comparison help the reader understand?", keywords:[["loud","noise","noisy","volume","constant","steady","many","how many bees","hum"]], answerExpected:"It shows how loud and constant the sound is, made by huge numbers of bees together.", answerGreaterDepth:"A distant motorway is a low, steady roar made by very many separate things at once. The comparison lets the reader hear the scale of the effort — thousands of wings working together — from a sound they already know.", steps:["Think about what a distant motorway actually sounds like: low, constant, made by many vehicles at once.","Applying that to a hive tells you the fanning is loud and unbroken.","It also tells you how many bees must be doing it, without giving a number."] },
      { code:"2c", marks:2, q:"Summarise, in your own words, the main stages that turn nectar into honey.", keywords:[["collect","gather","nectar","flowers"],["enzymes","passed","bees","break down"],["dry","fan","evaporat","thicken","cap","seal"]], answerExpected:"Bees collect nectar, pass it between each other adding enzymes, then fan it dry in the comb until it thickens and seal it with wax.", answerGreaterDepth:"A forager collects nectar from flowers and carries it home in her honey stomach. Inside the hive it is passed between several bees, each adding enzymes that break the complex sugars into simpler ones. The liquid then goes into a wax cell, where the bees fan it until the water evaporates and it thickens, and finally they cap it with wax.", steps:["The passage moves through the process in clear stages — follow them in order.","Stage 1: collecting nectar from flowers.","Stage 2: passing it between bees, adding enzymes.","Stage 3: fanning it dry in the wax cell, then capping it."] },
      { code:"2f", marks:2, q:"Explain why the writer waits until near the end to give the numbers about a twelfth of a teaspoon and two million flowers.", keywords:[["understand","already","explained","process","how much work","stages","complicated"],["adds up","striking","scale","measure","hit","harder","impact","stronger"]], answerExpected:"Because by then the reader understands the whole process, so the numbers show just how much work it all adds up to.", answerGreaterDepth:"By that point the reader has followed every stage — the collecting, the passing between bees, the enzymes, the hours of fanning. The numbers then land on top of all that detail and give it a scale, which makes the ending far more striking than it would have been at the start.", steps:["Think about what the reader knows by the time the numbers appear.","They have just read several paragraphs of slow, detailed, effortful work.","Putting the numbers last means they measure everything already described, so they hit much harder than they would in paragraph one."] },
      { code:"2h", marks:2, q:"How is the way Harry felt about the homework at the start different from how he feels at the end?", keywords:[["simple","easy","two lines","quick","short","assumed"],["amazed","impressed","appreciate","proud","struck","surprised","three pages","odd feeling"]], answerExpected:"At the start he expected an easy two-line answer, but by the end he is impressed and sees honey differently.", answerGreaterDepth:"At the start he treats it as a two-line job that will be finished by four o'clock. By the end he has three pages, a diagram he is proud of, and “a slightly odd feeling” about his toast — he has gone from taking honey for granted to being genuinely struck by the effort behind it.", steps:["Find how the passage describes his expectations at the start.","“He assumed it would take two lines... out in the garden by four.”","Find how it describes him at the end: three pages, a diagram he is proud of, an odd feeling about his toast.","Describe the shift from expecting something trivial to being impressed."] }
    ]
  },
  {
    id: "lighthouse-last-night",
    genre: "Fiction",
    title: "The Lighthouse Keeper's Last Night",
    teaser: "On his final shift before the machines take over, a keeper does the job one last time.",
    text: `Tom Alderney had climbed the hundred and sixty-two steps of the Skerry Point light every night for thirty-one years, and tonight he counted them.

He had never counted them before. There had never seemed much point. The steps were simply the distance between the bottom of his working day and the top of it, the way the walk to a bus stop is not really a journey. But tomorrow morning a man from the mainland would arrive with a clipboard and a box of electronics, and after that the light would look after itself. It would switch on at dusk without being asked. It would never once need a keeper to carry oil up a spiral staircase in a gale.

Ninety-four. Ninety-five. The stone was worn into shallow dips in the middle of each tread, and Tom found himself thinking about that: how many thousands of times a boot had to fall in the same place to wear away granite. Not his boots alone. Keepers had been climbing these steps since 1861. He was simply the last man in a very long queue.

At the top, he pushed open the door to the lamp room and the cold came at him the way it always did, sharp and clean and smelling of the sea. The great lens sat in the middle of the floor like something asleep — a barrel of glass rings taller than he was, each one ground and polished so precisely that it could gather a single flame and throw it eighteen miles out across the water.

He lit the lamp. He wound the clockwork that turned the lens. He noted the time in the logbook, in the same square handwriting his old supervisor had once told him was the only handwriting worth having, and then he sat down on the wooden stool by the window and watched the beam sweep out into the dark.

Nine seconds. That was Skerry Point's signature: a flash, then nine seconds of darkness, then another flash. Every lighthouse on the coast had a different rhythm, so that a captain in bad weather could tell exactly which light he was looking at, and therefore exactly where he was. Tom had always liked that. A lighthouse did not simply say danger here. It said danger here, and this is which danger, and this is where you are.

He had met men in harbour bars who thought the job was lonely. It was, sometimes, in February, when the supply boat could not get out for eleven days and he ate the last of the tinned peaches standing up at the window. But loneliness was not the main flavour of it, and he had long ago stopped trying to explain the rest to people who had never sat in a lamp room at three in the morning with a storm shouldering the tower.

The main flavour was this: somewhere out there, always, was a boat. He would probably never see it. He would certainly never meet whoever was aboard. And yet the whole arrangement — the lamp, the clockwork, the nine seconds, the man on the stool — existed entirely for their benefit. It was the least sentimental kind of care he could imagine, and the most reliable.

Around two o'clock the wind got up properly and rain began to hit the glass in handfuls. Tom checked the lamp, checked the clockwork, and made a note. Then he took out the small tin he had brought up with him and did the thing he had been planning for a fortnight and had told absolutely nobody about.

Inside the tin was a strip of brass, and on it he had scratched, badly, with a nail: T. ALDERNEY, KEEPER, 1962–1993. THE LIGHT WAS NEVER OUT.

He worked the strip in behind the lens housing, into a gap where no cleaning cloth would ever reach and no engineer would ever look, and he pressed it flat. It was not a message to anybody. He knew perfectly well that it might sit there unread for two hundred years, or for ever.

That was rather the point, he thought. Lighthouses were not built for the people who could see them.

Then he wound the clockwork again, because it was due, and settled back on the stool to watch the beam go round.`,
    questions: [
      { code:"2b", type:"tick-one", marks:1, q:"Why is tonight Tom's last night as keeper?",
        options:["He is retiring because of his age.","The lighthouse is being switched off for good.","The light is being automated the next morning.","He is moving to a different lighthouse."], correct:2,
        explanation:"The passage says a man will arrive “with a clipboard and a box of electronics, and after that the light would look after itself.”" },
      { code:"2a", marks:1, q:"Find and copy one word from paragraph 3 that shows the stone steps had been slowly worn down over time.", keywords:[["dips"]], answerExpected:"dips", answerGreaterDepth:"dips (“worn into shallow dips in the middle of each tread”)", steps:["Look at the sentence describing the steps in paragraph 3.","The stone was “worn into shallow dips” — a dip is a hollow made by long, repeated use."] },
      { code:"2b", type:"tick-two", marks:1, q:"According to the passage, what are two things a lighthouse's flashing pattern tells a captain? Tick two.",
        options:["That there is danger in that place.","Exactly which lighthouse they can see.","How deep the water is.","How far away the harbour is.","What the weather will do next."], correct:[0,1],
        explanation:"The passage explains each lighthouse has a different rhythm “so that a captain in bad weather could tell exactly which light he was looking at”, and that the light says “danger here, and this is which danger, and this is where you are.”" },
      { code:"2d", marks:1, q:"Why do you think Tom counted the steps on this particular night, when he had never counted them before?", keywords:[["last"],["notice","aware","pay attention","memor","ending","final"]], answerExpected:"Because it was his last time, so he wanted to notice it properly.", answerGreaterDepth:"Because he knew it was the last time he would ever climb them, so things he had ignored for thirty-one years suddenly became worth noticing and remembering.", steps:["This is an inference — the passage never says directly why he counts.","Clue: “There had never seemed much point” before, because the steps were just part of an ordinary day.","Clue: tomorrow the job ends. Once something is about to stop, people start paying attention to it."] },
      { code:"2g", marks:1, q:"The writer describes the lens as sitting “like something asleep”. What impression does this give the reader?", keywords:[["alive","living","creature","animal","awake","waking","breathing"]], answerExpected:"It makes the lens seem alive, as if it could wake up.", answerGreaterDepth:"It makes the lens feel like a living creature rather than a machine — something powerful that is resting and about to be woken, which adds a sense of importance to the moment Tom lights it.", steps:["This asks about the effect of a comparison, not its meaning.","Only living things sleep, so “asleep” quietly turns the lens into a creature.","That prepares the reader for the moment it is “woken” and throws light eighteen miles."] },
      { code:"2c", type:"order", marks:1, q:"Number these events 1–4 to show the order in which they happen in the passage.",
        items:["Tom counts the steps as he climbs the tower.","Tom lights the lamp and writes in the logbook.","The wind rises and rain hits the glass.","Tom hides the brass strip behind the lens housing."],
        explanation:"Tom climbs and counts first, then lights the lamp and fills in the log, then the storm arrives at around two o'clock, and only after that does he hide the brass strip." },
      { code:"2d", marks:2, q:"Tom says he had “stopped trying to explain the rest to people who had never sat in a lamp room at three in the morning”. What does this suggest about how he feels about his job?", keywords:[["hard to explain","difficult to explain","cannot explain","can't explain","understand"],["love","proud","meaning","matters","values","more than"]], answerExpected:"He finds it hard to explain, but it means much more to him than other people understand.", answerGreaterDepth:"It suggests the job means far more to him than the loneliness other people assume, but that the meaning is difficult to explain to anyone who has not done it — so he has given up trying rather than because he cares less.", steps:["Look at what he has given up doing, and why.","People assume the job is lonely; he admits it sometimes is, but says loneliness “was not the main flavour of it”.","He stopped explaining — not because there is nothing to say, but because it cannot be understood second-hand."] },
      { code:"2f", marks:2, q:"Explain why the writer ends the passage with Tom winding the clockwork and watching the beam, rather than with him leaving the lighthouse.", keywords:[["duty","job","carry on","carries on","continues","keeps going","still working","end"],["last night","final","never stopped","never out"]], answerExpected:"It shows he carries on doing the job properly right to the very end of his last night.", answerGreaterDepth:"Ending on the ordinary task rather than a dramatic goodbye shows that Tom keeps doing the job exactly as always, right to the last minute — which matches his brass strip saying “the light was never out”, and makes the ending quiet and dignified instead of sentimental.", steps:["Think about what a different ending would have felt like — walking away would be a goodbye.","Instead he does something completely routine: winding the clockwork “because it was due”.","This echoes the message he hid: the light was never out. The job matters more than the farewell."] },
      { code:"2h", marks:2, q:"Compare how Tom feels about the steps at the beginning of the passage with how he feels about the lighthouse by the end.", keywords:[["not","never","hardly","just","simply","ordinary","point"],["history","part of","long queue","meaning","matters","proud","belong"]], answerExpected:"At first the steps were just an ordinary part of his day; by the end he sees himself as part of the lighthouse's long history.", answerGreaterDepth:"At the start the steps are so ordinary he has never even counted them — “there had never seemed much point”. By the end he is thinking about keepers going back to 1861, calling himself “the last man in a very long queue”, and leaving his name where nobody will read it. His feeling shifts from routine to a quiet sense of belonging to something much longer than himself.", steps:["Find how the steps are described early on: simply a distance, not a journey, never counted.","Find what he is thinking about by the end: keepers since 1861, a long queue, a message that may never be read.","Describe the shift: from ordinary routine to being part of a long history."] }
    ]
  },
  {
    id: "how-volcanoes-work",
    genre: "Non-fiction",
    title: "What Is Actually Going On Inside a Volcano",
    teaser: "Not a mountain full of fire — something stranger, slower and far more interesting.",
    text: `Most people's first picture of a volcano comes from a diagram: a triangle with a hole in the top and a red channel running down the middle to a pool of fire. It is a useful picture for about thirty seconds, and then it starts getting in the way, because almost every part of it is wrong.

Start with the fire. There is no fire inside a volcano. Fire needs oxygen, and there is no free oxygen hundreds of kilometres below your feet. What is down there is rock — ordinary rock, of the kind you could pick up and put in your pocket, except that it is under such enormous pressure and such enormous heat that it behaves in ways rock at the surface never does.

Here is the first surprise. The Earth's mantle, the vast layer beneath the crust, is not a sea of liquid lava. It is solid. It is solid all the way down, apart from small pockets. But it is solid the way a very slow, very stiff toffee is solid: given a few million years, it flows. Whole continents ride on top of it and are shoved slowly around by it, at roughly the speed your fingernails grow.

So if the mantle is solid, where does molten rock come from?

Mostly it comes from lowering the melting point. This sounds like cheating, and it very nearly is. Rock, like everything else, melts at a particular temperature — but that temperature is not fixed. Reduce the pressure on hot rock and it can melt without getting any hotter at all. Add water to hot rock and it melts at a lower temperature, in the same way that scattering salt on an icy pavement makes the ice melt in weather where it would otherwise stay frozen.

Both of those things happen at the edges of the Earth's tectonic plates, which is exactly where almost all volcanoes are. Where two plates pull apart, the pressure underneath drops and the hot rock beneath begins to melt. Where one plate slides underneath another, it drags waterlogged seafloor down with it; the water is squeezed out into the hot rock above, and that rock melts too. Draw a map of the world's volcanoes and you are really drawing a map of the joins between the plates.

Once molten rock — called magma while it is underground — has formed, it does something simple: it rises. Melted rock is slightly less dense than the solid rock around it, so it floats upwards, the way a bubble of air rises through water, only unimaginably more slowly. On the way it collects in chambers, cools a little, and changes chemically.

That chemistry decides what kind of eruption you get, and it is mostly about one thing: how runny the magma is.

Runny magma lets gas escape easily. Volcanoes fed by runny magma, like those in Hawaii, tend to produce spectacular but relatively predictable eruptions — glowing rivers that you can, with care, stand a sensible distance from and photograph. Sticky magma is a different matter. Gas cannot escape through it, so it stays dissolved under pressure, exactly like the gas in an unopened bottle of fizzy drink. Shake that bottle, then take the lid off, and the sudden drop in pressure lets every bubble expand at once.

That is what an explosive eruption is. Not fire pushed up a chimney, but dissolved gas escaping from sticky liquid so violently that it shreds the rock around it into ash and hurls it upwards.

This is why volcanologists spend so much of their time watching for things that have nothing to do with heat. They measure the shape of the mountain, because magma collecting underground makes the ground bulge, sometimes by only a few centimetres. They measure the gases seeping out of cracks, because changes in the mix can mean fresh magma is arriving from below. They listen, constantly, to tiny earthquakes, because magma forcing its way through rock breaks that rock, and breaking rock makes a sound.

None of these are the signs the diagram would suggest. A volcano does not usually announce itself by glowing. It swells slightly, breathes differently, and mutters.

The diagram, in the end, is not a picture of a volcano. It is a picture of what a volcano looks like from outside, at the one moment when it is too late to be useful.`,
    questions: [
      { code:"2b", type:"tick-one", marks:1, q:"According to the passage, why is there no fire inside a volcano?",
        options:["It is too cold underground for fire.","There is no free oxygen deep underground.","The rock is too wet to burn.","Fire cannot exist under pressure."], correct:1,
        explanation:"The passage says: “Fire needs oxygen, and there is no free oxygen hundreds of kilometres below your feet.”" },
      { code:"2a", marks:1, q:"The passage says magma is “molten”. What does molten mean?", keywords:[["melt"]], answerExpected:"melted, so that it has turned into a liquid", answerGreaterDepth:"Melted — solid rock that has been heated (or had its melting point lowered) until it has become a thick liquid.", steps:["Use the surrounding words to work it out: the passage is talking about rock that has stopped being solid.","“Molten rock — called magma while it is underground” tells you it is rock in liquid form."] },
      { code:"2b", type:"truefalse", marks:2, q:"Using information from the passage, tick one box in each row to show whether each statement is true or false.",
        statements:[
          { text:"The Earth's mantle is a sea of liquid lava.", answer:false },
          { text:"Rock can melt without getting any hotter if the pressure on it drops.", answer:true },
          { text:"Almost all volcanoes are found at the edges of tectonic plates.", answer:true },
          { text:"Runny magma traps gas more than sticky magma does.", answer:false }
        ],
        explanation:"The mantle “is solid… apart from small pockets”. Reducing pressure can melt rock “without getting any hotter at all”. Volcanoes sit “at the edges of the Earth's tectonic plates”. It is sticky magma, not runny magma, that traps gas." },
      { code:"2g", marks:2, q:"The writer compares the mantle to “a very slow, very stiff toffee”. Why is this a helpful comparison?", keywords:[["solid"],["flow","move","bend","slowly","time"]], answerExpected:"It shows the mantle is solid but can still slowly flow over a long time.", answerGreaterDepth:"Toffee is something readers have handled: it is clearly solid, yet it will slowly sag and flow if you give it time. That captures the difficult idea that the mantle can be genuinely solid and still move continents around, which “liquid” or “solid” alone would not explain.", steps:["The tricky idea is that something can be solid and still flow.","Toffee is familiar and does exactly that — solid to the touch, but it sags given time.","So the comparison makes an unfamiliar scientific idea fit something the reader already knows."] },
      { code:"2b", type:"match", marks:2, q:"Tick one box in each row to show whether each description matches runny magma or sticky magma.",
        columns:["Runny magma","Sticky magma"],
        rows:[
          { text:"Gas escapes easily.", answer:"Runny magma" },
          { text:"Produces explosive eruptions.", answer:"Sticky magma" },
          { text:"Found in Hawaiian-style eruptions.", answer:"Runny magma" },
          { text:"Traps gas under pressure like a fizzy drink.", answer:"Sticky magma" }
        ],
        explanation:"The passage says runny magma “lets gas escape easily” and gives Hawaii as the example, while with sticky magma “gas cannot escape… exactly like the gas in an unopened bottle of fizzy drink”, producing explosive eruptions." },
      { code:"2c", marks:2, q:"Summarise, in your own words, the two main ways the passage says rock underground can melt.", keywords:[["pressure"],["water"]], answerExpected:"Rock melts when the pressure on it drops, and when water is added to it.", answerGreaterDepth:"Rock does not need to get hotter to melt: lowering the pressure on already-hot rock lets it melt, and adding water to hot rock lowers its melting point so it melts at a temperature where it would otherwise stay solid.", steps:["Find the section beginning “Mostly it comes from lowering the melting point.”","Way 1: “Reduce the pressure on hot rock and it can melt without getting any hotter at all.”","Way 2: “Add water to hot rock and it melts at a lower temperature.”"] },
      { code:"2d", marks:2, q:"Why do volcanologists measure the shape of a mountain and the gases coming out of cracks, rather than just looking for heat or glowing rock?", keywords:[["before","early","warning","advance","predict","sign"],["bulge","shape","gas","swell","earthquake"]], answerExpected:"Because changes in shape and gas happen before an eruption, so they give an early warning.", answerGreaterDepth:"Because a volcano does not warn people by glowing — magma collecting underground makes the ground bulge, changes the mix of escaping gases, and cracks rock, causing tiny earthquakes. These signs appear before an eruption, whereas visible heat appears when “it is too late to be useful”.", steps:["Find what scientists actually monitor: ground shape, gas mixture, tiny earthquakes.","Ask what these have in common — they all happen while magma is still underground.","Compare with the last line: glowing is what a volcano looks like when it is too late."] },
      { code:"2f", marks:2, q:"The writer begins and ends the passage by talking about the diagram of a volcano. Why is that an effective way to organise the writing?", keywords:[["begin","start","beginning","end","ends","return","frame","again"],["wrong","misleading","understand","correct","replace","better"]], answerExpected:"Starting and ending with the diagram frames the whole passage as correcting a wrong picture.", answerGreaterDepth:"The diagram at the start is set up as the picture most readers already carry, and everything in between explains why it is misleading. Returning to it at the end lets the writer land the point neatly — the diagram shows a volcano only “at the one moment when it is too late to be useful” — so the passage closes the loop it opened.", steps:["Notice the passage opens with the familiar triangle diagram, and closes with it too.","In between, each section undoes part of that picture: no fire, not liquid, not a chimney.","Coming back to it at the end makes the whole passage feel like one argument rather than a list of facts."] },
      { code:"2e", marks:1, q:"Based on the passage, what would scientists most likely notice first if a volcano were about to erupt?", keywords:[["bulge","swell","shape","ground","gas","earthquake","tremor"]], answerExpected:"The ground beginning to bulge, or a change in the gases and small earthquakes.", answerGreaterDepth:"Small, undramatic signs: the ground swelling by a few centimetres as magma collects, a change in the mixture of gases seeping from cracks, and an increase in tiny earthquakes as magma breaks its way through rock.", steps:["Use the list of what volcanologists monitor.","All three signs are caused by magma still moving underground, so they come before any visible eruption."] }
    ]
  },
  {
    id: "fox-sycamore-road",
    genre: "Fiction",
    title: "The Fox on Sycamore Road",
    teaser: "Ocean has been watching the same fox for eleven nights, and writing it all down.",
    text: `Ocean had been keeping the notebook for eleven days, and the notebook was beginning to have opinions.

That was how it felt, anyway. She had started it as a list — Tues: 9.14pm, by the recycling bins, alone — because Mrs Achebe had said that a scientist writes down what they see and not what they hope, and Ocean had wanted to be exact. But somewhere around the fifth night the entries had begun to grow tails. Thurs: 9.02pm. Waited under the hedge for four minutes before crossing. Looked both ways. (Not really. But it looked like looking.)

The fox came at roughly the same time every evening, which was the first thing Ocean had noticed and the thing she was proudest of noticing, because nobody else in the house believed her until she showed them nine consecutive lines all beginning between nine and nine twenty.

"Coincidence," said Harry, who was fourteen and had recently discovered the word.

"Eleven times?"

"That's still coincidence. It's just a lot of it."

But Ocean had read that foxes hold territories and walk them in patterns, checking the same places in the same order, the way you might check the same four pockets when you have lost your keys. If that was true, then the fox was not wandering past their house. The fox was doing its round, and their front wall was simply one of its stops, and had been for longer than Ocean had been watching.

Which meant, she thought, that she was not really discovering the fox at all. She was just the first person in the house to look up at the right time.

On the twelfth night it rained hard, and she nearly did not go to the window. She went because of the notebook. It seemed unfair to record eleven nights of a creature going about its business in all weathers and then miss one because she personally did not fancy the weather.

At 9.11 the fox came along the top of the wall, wet and thin and considerably less impressive than it had been on the dry nights, its fur stuck down in points. It stopped where it always stopped, under the streetlight, and did the thing Ocean still had not managed to write down properly: it stood absolutely still for about six seconds with one paw raised, not sniffing, not looking at anything in particular, simply stopped, like a program waiting for something.

Then it turned its head and looked directly at her window.

Ocean did not move. She was aware, in a distant way, of her own breathing, and of the fact that the fox could not possibly see her behind the glass with the light off, and of the fact that it was looking anyway.

For four seconds — she counted, because she was still a scientist even when her heart was doing that — the two of them stayed exactly where they were.

Then the fox stepped down off the wall and carried on along Sycamore Road, and the road was just a road again.

Ocean wrote: Fri: 9.11pm. Rain. Stopped under light as usual. Looked at window for 4 secs.

She looked at the sentence for a while. Then she added, in smaller writing underneath, because Mrs Achebe had also said that a scientist writes down what they don't understand as carefully as what they do:

Don't know if it saw me. Don't know if foxes look at things or just look. Ask someone who knows.

Downstairs, Harry was arguing with the television. Outside, the rain kept going and the streetlight buzzed and somewhere in the next street the fox was probably checking its next pocket for its keys.

Ocean closed the notebook, but she did not put it away. She left it on the windowsill, open at tomorrow's page, which was still empty, and which she had already dated.`,
    questions: [
      { code:"2b", type:"tick-one", marks:1, q:"Why did Ocean start keeping the notebook?",
        options:["Because Mrs Achebe set it as homework.","Because she wanted to prove Harry wrong.","Because she wanted to record exactly what she saw.","Because she wanted to write a story about a fox."], correct:2,
        explanation:"The passage says Mrs Achebe had said “a scientist writes down what they see and not what they hope, and Ocean had wanted to be exact.”" },
      { code:"2a", marks:1, q:"Find and copy a word from the passage that shows the fox's visits happened one after another without a gap.", keywords:[["consecutive"]], answerExpected:"consecutive", answerGreaterDepth:"consecutive (“nine consecutive lines all beginning between nine and nine twenty”)", steps:["Look at the sentence where Ocean proves her point to the rest of the house.","“Consecutive” means following one after another with none missed out."] },
      { code:"2d", marks:1, q:"What does Harry's reply, “That's still coincidence. It's just a lot of it,” suggest about him?", keywords:[["not","won't","refus","doesn't","dismiss","unwilling","admit","wrong"]], answerExpected:"He does not want to admit that Ocean might be right.", answerGreaterDepth:"That he is dismissing her evidence rather than considering it — he has decided on his answer and simply repeats it, which suggests he is unwilling to admit his younger sister might have noticed something real.", steps:["Look at what Ocean has just shown him: eleven matching entries.","His reply does not deal with that evidence at all; it just restates his first answer.","The passage also notes he had “recently discovered the word”, hinting he likes using it more than thinking about it."] },
      { code:"2g", marks:2, q:"The writer says the notebook “was beginning to have opinions”. What does this suggest about how Ocean's writing had changed?", keywords:[["fact","list","exact","just what she saw","observ"],["thought","opinion","guess","wonder","idea","interpret","personal"]], answerExpected:"It had changed from a plain list of facts into writing with her own thoughts and guesses in it.", answerGreaterDepth:"It suggests her entries had stopped being purely factual records and had started including her own interpretations and asides — shown by the bracketed “(Not really. But it looked like looking.)” — so the notebook now had a voice of its own rather than just data.", steps:["A notebook cannot really have opinions, so this is the writer being playful.","Compare the first entry (time, place, alone) with the later one, which adds a guess in brackets.","The change is from recording to interpreting."] },
      { code:"2c", type:"order", marks:1, q:"Number these events 1–4 to show the order in which they happen in the passage.",
        items:["Ocean shows the family nine matching entries.","Harry says the pattern is a coincidence.","Ocean nearly stays away from the window because of the rain.","The fox looks directly at Ocean's window."],
        explanation:"Ocean proves the pattern first, Harry dismisses it, then on the twelfth night the rain nearly keeps her away, and only then does the fox look at the window." },
      { code:"2d", marks:2, q:"Ocean thinks she is “not really discovering the fox at all”. Explain what she means.", keywords:[["always","already","before","long time","years","existed","doing"],["first","noticed","looked","saw"]], answerExpected:"The fox was always doing its round; she was just the first person to notice it.", answerGreaterDepth:"She realises the fox's route was already happening long before she started watching — it was “doing its round” and their wall was simply one stop on it. So she has not found something new; she has only become the first person in the house to look at the right moment.", steps:["Find the idea just before this sentence: foxes walk territories in patterns.","If the pattern was already there, the fox was not new — only Ocean's attention was.","She is being precise about the difference between something existing and someone noticing it."] },
      { code:"2g", marks:2, q:"The writer compares the fox checking its territory to “check[ing] the same four pockets when you have lost your keys”, and uses the idea again at the end. Why is this comparison effective?", keywords:[["ordinary","everyday","familiar","normal","routine","understand","relat"],["order","same","pattern","route","round","habit"]], answerExpected:"It makes the fox's route feel like an ordinary, familiar routine the reader recognises.", answerGreaterDepth:"Searching the same pockets in the same order is something almost every reader has done, so it explains territory-checking instantly and makes the fox seem purposeful and ordinary rather than mysterious. Repeating it in the last paragraph quietly links the ending back to Ocean's discovery.", steps:["Ask what the comparison explains: a fixed route, checked in a fixed order.","It uses something the reader has definitely experienced to explain animal behaviour they haven't.","Notice it comes back at the end — “checking its next pocket for its keys” — tying the passage together."] },
      { code:"2f", marks:2, q:"Why does the writer end the passage with Ocean leaving the notebook open on the windowsill, already dated for tomorrow?", keywords:[["carry on","continue","keep","again","tomorrow","not finished","more"],["curio","interested","committed","determined","scientist"]], answerExpected:"It shows she is going to carry on watching — she is not finished.", answerGreaterDepth:"Leaving it open and pre-dated shows her curiosity has not been satisfied by the dramatic moment — if anything it has grown. It ends the passage on continuation rather than conclusion, which fits her decision to write down what she doesn't understand and “ask someone who knows”.", steps:["Think about what closing and putting away the notebook would have signalled: an ending.","Instead she leaves it open, on a page she has already dated.","That says the watching continues — the story stops but the project doesn't."] },
      { code:"2h", marks:2, q:"Compare how Ocean writes in her notebook at the start of the passage with how she writes in it at the end.", keywords:[["fact","list","exact","time","place","short"],["don't know","doesn't know","unsure","question","ask","uncertain"]], answerExpected:"At the start she records only exact facts; at the end she also writes down what she doesn't know.", answerGreaterDepth:"At the start the entries are short and purely factual — time, place, whether the fox was alone — because she wants to be exact. By the end she still records the facts, but adds smaller writing admitting “Don't know if it saw me” and telling herself to ask someone who knows. She has moved from recording certainty to recording uncertainty honestly, which the passage presents as the more scientific thing to do.", steps:["Look at the first entry quoted: time, place, alone.","Look at the final entry: the facts, then an honest note about what she cannot tell.","Both come from Mrs Achebe's advice — the second half of it arrives later."] }
    ]
  },
  {
    id: "why-leap-years",
    genre: "Non-fiction",
    title: "Why February Sometimes Gets an Extra Day",
    teaser: "The year does not divide neatly into days, and everything about our calendar is an attempt to hide that.",
    text: `A year is how long the Earth takes to go once around the Sun. A day is how long the Earth takes to spin once on its axis. There is no reason at all why one of these should divide neatly into the other, and it doesn't.

The Earth takes about 365.2422 days to complete one orbit. That awkward fraction on the end is the entire reason leap years exist, and very nearly the entire history of the calendar.

Imagine, for a moment, that we ignored it. Suppose we simply said a year is 365 days and left it at that. Every year, the calendar would finish its orbit about a quarter of a day early — roughly six hours. That sounds harmless. Over four years it becomes a whole day. Over a century it becomes about twenty-four days. Over seven hundred years, the calendar would have slipped by nearly six months, and the date we called midsummer would be falling in the middle of winter.

This is not a theoretical problem. It happened.

The Romans used a calendar of 365 days with an extra day added every fourth year, introduced under Julius Caesar and known ever since as the Julian calendar. Adding a day every four years assumes the year is exactly 365.25 days long. Compare that with the real figure, 365.2422, and you can see the mistake: the Julian year is about eleven minutes too long.

Eleven minutes a year is nothing. Eleven minutes a year for sixteen centuries is ten days.

By the 1500s this had become genuinely awkward, mostly for religious reasons — the date of Easter is calculated from the spring equinox, and the equinox had drifted well away from where the calendar said it should be. In 1582 a reformed calendar was introduced, the one almost the whole world now uses. It made two changes.

The first was a one-off correction: ten days were simply deleted. In the countries that adopted the change immediately, the day after the 4th of October 1582 was the 15th of October 1582. Nothing happened in between, because there was no in between.

The second change was cleverer, and it is the rule we still follow. A leap year is any year divisible by four — except years divisible by 100, which are not leap years, unless they are also divisible by 400, in which case they are.

That sounds fussy, but look at what it does. Adding a day every four years overshoots slightly. Skipping three of those extra days every four hundred years pulls the average back down. Under this rule the average calendar year is 365.2425 days long, against a real orbit of 365.2422 days. The error is about 27 seconds a year, which takes over three thousand years to add up to a single day.

The rule also explains something a lot of people quietly get wrong. The year 1900 was divisible by four, but it was not a leap year, because it is divisible by 100 and not by 400. The year 2000 was divisible by 100, and most people assumed the same thing would happen — but 2000 is also divisible by 400, so it was a leap year after all. Anyone who lived through it saw the rarest kind of leap day there is: the exception to the exception.

Britain, incidentally, was late. It kept the old Julian calendar until 1752, by which time the error had grown to eleven days. When the change finally came, the day after the 2nd of September 1752 was the 14th of September. There is a persistent story that crowds rioted, demanding their eleven days back. Historians have found very little evidence for it, and it is now generally regarded as a myth, but it is repeated so often that it has become almost as famous as the reform itself.

What all of this really shows is something odd about calendars. We tend to think of them as fixed things — as facts, like the number of legs on a spider. They are nothing of the sort. A calendar is a running attempt to fit a whole number of days into an orbit that refuses to contain one, and the extra day at the end of February is the visible edge of that attempt: a small, regular correction to an error we cannot get rid of, only manage.`,
    questions: [
      { code:"2b", type:"tick-one", marks:1, q:"According to the passage, roughly how many days does the Earth take to orbit the Sun?",
        options:["365 days exactly","365.25 days","365.2422 days","365.2425 days"], correct:2,
        explanation:"The passage says: “The Earth takes about 365.2422 days to complete one orbit.”" },
      { code:"2a", marks:1, q:"The passage says the calendar would have “slipped” by nearly six months. What does slipped mean here?", keywords:[["drift","moved","shift","out of place","wrong","gradually"]], answerExpected:"gradually moved out of place", answerGreaterDepth:"Drifted gradually out of position — the dates would slowly stop matching the seasons they are supposed to mark, without anybody moving them deliberately.", steps:["“Slipped” is not about falling over here.","The passage explains the effect: midsummer “falling in the middle of winter”.","So it means gradually drifting away from where it should be."] },
      { code:"2b", type:"truefalse", marks:2, q:"Using information from the passage, tick one box in each row to show whether each statement is true or false.",
        statements:[
          { text:"The Julian calendar assumed a year was exactly 365.25 days long.", answer:true },
          { text:"The year 1900 was a leap year.", answer:false },
          { text:"Britain changed to the reformed calendar in 1582.", answer:false },
          { text:"The current rule leaves an error of about 27 seconds a year.", answer:true }
        ],
        explanation:"The Julian rule “assumes the year is exactly 365.25 days long”. 1900 “was not a leap year”. Britain “kept the old Julian calendar until 1752”. The modern error is “about 27 seconds a year”." },
      { code:"2c", marks:2, q:"In your own words, explain the modern rule for working out whether a year is a leap year.", keywords:[["four","4"],["100","hundred"],["400","four hundred"]], answerExpected:"A year is a leap year if it divides by four, unless it divides by 100 — but it is a leap year again if it divides by 400.", answerGreaterDepth:"Any year divisible by four is a leap year, except years that are also divisible by 100, which are not — unless they are divisible by 400 as well, in which case they are leap years after all. That is why 1900 was not a leap year but 2000 was.", steps:["Find the rule stated in the passage.","There are three parts: divisible by 4, the exception for 100, and the exception to the exception for 400.","A good answer includes all three."] },
      { code:"2d", marks:2, q:"Why does the passage say that eleven minutes a year was a serious problem, when eleven minutes sounds like almost nothing?", keywords:[["add up","adds","accumulate","build","over time","years","centuries","total"],["ten days","10 days","days"]], answerExpected:"Because it adds up — over sixteen centuries eleven minutes a year became ten days.", answerGreaterDepth:"Because the error repeats every single year and never corrects itself, so it accumulates: “eleven minutes a year for sixteen centuries is ten days”, which was enough to push the spring equinox well away from its calendar date.", steps:["Notice the writer agrees it sounds like nothing: “Eleven minutes a year is nothing.”","The next sentence supplies the answer by multiplying it up.","The point is that small repeated errors accumulate."] },
      { code:"2g", marks:1, q:"The writer describes the year 2000 as “the exception to the exception”. Explain why this phrase fits.", keywords:[["100","hundred"],["400","four hundred"]], answerExpected:"2000 divides by 100, which would normally cancel the leap year, but it also divides by 400, which cancels that.", answerGreaterDepth:"The first rule makes leap years; being divisible by 100 is the exception that removes them; being divisible by 400 is a further exception that puts the leap year back. 2000 triggers all three, so it is literally an exception to an exception.", steps:["Rule: divisible by 4 means leap year.","Exception: divisible by 100 means not a leap year.","Exception to that: divisible by 400 means leap year after all. 2000 fits the last one."] },
      { code:"2d", marks:1, q:"Why do you think the writer mentions that historians have found “very little evidence” for the 1752 riots?", keywords:[["accurate","honest","true","careful","fact","not repeat","myth","correct"]], answerExpected:"To be accurate and honest, rather than repeating a story that is probably untrue.", answerGreaterDepth:"To make clear that a widely repeated story is not the same as a fact — the writer includes the tale because it is famous, but corrects it immediately so the reader is not misled, which fits a passage that is otherwise careful about numbers and evidence.", steps:["The writer could simply have told the riot story — it is a good one.","Instead they immediately flag that the evidence is weak.","This shows the writer separating what is documented from what is merely repeated."] },
      { code:"2f", marks:2, q:"How does the last paragraph change the way the reader thinks about calendars?", keywords:[["fixed","fact","facts","permanent","unchanging","natural"],["attempt","invention","correction","managed","made","human","adjust"]], answerExpected:"It shows a calendar is not a fixed fact but a human attempt to manage an error.", answerGreaterDepth:"It reframes everything that came before: instead of a list of historical corrections, the calendar becomes “a running attempt to fit a whole number of days into an orbit that refuses to contain one”. Leap day stops being a quirk and becomes the visible edge of an error we can only manage, never remove.", steps:["Notice what the paragraph says people usually assume: calendars are fixed facts “like the number of legs on a spider”.","Then notice what it replaces that with: an ongoing attempt at correction.","The whole passage's facts are pulled together into a single idea."] }
    ]
  },
  {
    id: "poem-rain-gauge",
    genre: "Poetry",
    title: "The Rain Gauge",
    teaser: "A poem about a plastic tube in a garden, and the grandfather who read it every morning.",
    text: `THE RAIN GAUGE

My grandad kept a plastic tube
staked crooked in the lawn,
and every single morning, first,
before the kettle, before the news,
he'd cross the grass in slippers
and he'd bend, and he'd read the water.

Nought point four, he'd say. Or: Nothing.
Nothing was most days.
He wrote them in a spiral book
in pencil, one line each,
the way you'd write a shopping list
you never mean to shop from.

I asked him once what it was for.
He thought about it properly —
he always thought about it properly,
which is a thing that children notice —
and then he said, It isn't for.
It's just that someone ought to know.

Nought point four. Nought point nine.
A three, one August, underlined.
Two winters where he wrote the word
FROZEN in capitals, and drew
a small unhappy face beside it,
which was, for him, hilarious.

The tube is still out on the lawn.
Nobody has moved it.
The pencil's in the kitchen drawer
with batteries and string,
and the book is on the windowsill,
still open, still on Tuesday.

I don't go out at seven.
I'm not pretending that I do.
But I know it rained last night, and I know
that nobody wrote it down,
and there's a small unhappy face
somewhere inside me about that.

So this morning, in my socks,
across the wet and freezing grass,
I bent, the way he bent,
and read the little line of water,
and I did not say it out loud,
and I did not write it down,

but I knew it.
Nought point six.
Somebody ought to know.`,
    questions: [
      { code:"2b", type:"tick-one", marks:1, q:"When did the grandfather read the rain gauge?",
        options:["Last thing at night","Every morning before anything else","Only when it had rained heavily","Once a week"], correct:1,
        explanation:"The poem says “every single morning, first, / before the kettle, before the news”." },
      { code:"2a", marks:1, q:"Find and copy one word from the first stanza that shows the tube was not standing straight.", keywords:[["crooked"]], answerExpected:"crooked", answerGreaterDepth:"crooked (“staked crooked in the lawn”)", steps:["Look at how the tube is described in the first stanza.","“Crooked” means bent or set at an angle rather than upright."] },
      { code:"2d", marks:2, q:"The grandfather says the rain gauge “isn't for” anything, and then says “someone ought to know.” What does this tell you about him?", keywords:[["useful","use","reason","purpose","point","practical","need"],["care","record","noticing","attention","matters","worth","important"]], answerExpected:"He didn't do it to be useful — he thought some things are worth recording just because they happened.", answerGreaterDepth:"That he valued paying attention for its own sake. He is honest that the measurements serve no practical purpose, but believes that something happening without anybody noticing is a small loss — so recording it carefully is worth doing even when nobody will ever use the numbers.", steps:["Notice he does not defend the hobby as useful — he says outright it “isn't for” anything.","But he does not say it is pointless either.","“Someone ought to know” shows he thinks noticing things is valuable in itself."] },
      { code:"2g", marks:2, q:"The poet compares the rainfall book to “a shopping list / you never mean to shop from.” What does this comparison suggest?", keywords:[["careful","neat","proper","written","record","list","tidy"],["never actually used","never used","not used","no purpose","never mean","not for","pointless"]], answerExpected:"It suggests the records were written carefully but were never actually used for anything.", answerGreaterDepth:"A shopping list is written properly, line by line, with real care — but one you never shop from has no practical purpose at all. The comparison captures both halves of what the grandfather did: genuine, disciplined recording of something nobody would ever act on.", steps:["Think about what a shopping list is like: neat, one item per line, purposeful.","Then think about the twist: this one is never used.","The comparison holds both ideas at once — careful, and useless."] },
      { code:"2b", type:"truefalse", marks:2, q:"Using information from the poem, tick one box in each row to show whether each statement is true or false.",
        statements:[
          { text:"Most days the gauge showed no rain at all.", answer:true },
          { text:"The rain gauge has been taken out of the lawn.", answer:false },
          { text:"The speaker goes out to read the gauge every morning now.", answer:false },
          { text:"The book is still open on the same day it was last written in.", answer:true }
        ],
        explanation:"“Nothing was most days.” “The tube is still out on the lawn. / Nobody has moved it.” The speaker says “I don't go out at seven. / I'm not pretending that I do.” The book is “still open, still on Tuesday.”" },
      { code:"2g", marks:2, q:"Why do you think the poet mentions that the pencil is in a drawer “with batteries and string”?", keywords:[["ordinary","everyday","junk","odds","normal","unimportant","forgotten"],["special","meaning","matters","precious","memory","important"]], answerExpected:"It shows the pencil has been put away with ordinary junk, even though it means a lot to the speaker.", answerGreaterDepth:"Batteries and string are the contents of every household's odds-and-ends drawer — unremarkable things nobody thinks about. Putting the pencil there shows how easily something meaningful has slipped back into being ordinary, which is exactly what the speaker feels uneasy about.", steps:["Think about what kind of drawer contains batteries and string: the junk drawer.","The pencil was part of a daily ritual, and is now just another odd item.","The detail quietly shows the ritual has stopped without anybody deciding to stop it."] },
      { code:"2f", marks:2, q:"The last line of the poem repeats the grandfather's words, “Somebody ought to know.” Why is this an effective way to end?", keywords:[["repeat","echo","same words","again","said"],["carry","continue","take over","pass","understand","agree","now"]], answerExpected:"Repeating his words shows the speaker has taken over what he used to do and now understands why he did it.", answerGreaterDepth:"By ending on his exact phrase, the poem shows the speaker has moved from asking what the gauge was for to answering it in his words — the habit and the reasoning have passed on. It closes the poem on continuation rather than loss, even though the speaker still doesn't write anything down.", steps:["Notice where the phrase came from: the grandfather's answer in stanza three.","By the end the speaker is thinking it themselves, after going out in the cold to read the gauge.","The repetition shows understanding arriving, not just memory."] },
      { code:"2h", marks:2, q:"Compare how the speaker behaves in stanza six with how they behave in the final two stanzas.", keywords:[["don't","doesn't","not","admits","stopped","nobody"],["went","goes","bent","read","did","across the grass","socks"]], answerExpected:"In stanza six they admit they don't go out and nobody records the rain; in the last stanzas they actually go out and read it.", answerGreaterDepth:"In stanza six the speaker is honest about doing nothing — “I don't go out at seven. / I'm not pretending that I do” — and feels quietly bad that last night's rain went unrecorded. In the final stanzas they cross the freezing grass in their socks and read the gauge anyway, without saying it aloud or writing it down. They move from guilty inaction to a private version of the ritual.", steps:["Stanza six: what the speaker admits they do not do, and how that makes them feel.","Final stanzas: what they actually do, and how it echoes the grandfather.","Describe the change, and note the ritual is now private — not spoken, not written."] }
    ]
  },
  {
    id: "wrong-bus",
    genre: "Fiction",
    title: "The Wrong Bus",
    teaser: "Tilly realises three stops too late that this is not the 47.",
    text: `The thing about being on the wrong bus is that for the first few minutes, you are not on the wrong bus. You are simply on a bus, which is going somewhere, which is what buses do.

Tilly had been on it for about six minutes before the first small wrongness arrived. There was a mini-roundabout that shouldn't have been there. She looked at it with mild interest, the way you might look at a friend who has had a haircut without being able to work out what has changed, and then she looked back at her phone.

The second wrongness was a bridge.

The 47 did not go over a bridge. The 47 went past the leisure centre, and then the retail park, and then the long boring bit by the allotments where the man with the two greyhounds always got on. There was no bridge anywhere in it. Tilly sat up.

Outside the window, entirely calmly, the town rearranged itself into somewhere she had never been.

She did the sensible thing first, which was to check the front of the bus for a number, except that from inside you cannot see the front of the bus, which is a design flaw Tilly intended to think about at greater length once she was not busy. The scrolling sign above the driver said MOORFIELD via CANE HILL. She had never heard of either.

Right, she thought.

She was aware that her chest had started doing something unhelpful, and she was aware that being aware of it was supposed to help, and it did not appear to be helping. She put both feet flat on the floor, which her mum had once told her to do, and looked at the back of the seat in front, and said the four things she actually knew.

I am on a bus. Buses stop. I have a phone with 61% battery. Nobody has any idea where I am, which is fixable in about nine seconds.

Then she did fix it, in about nine seconds, and felt slightly ridiculous about the previous forty.

Her dad's reply arrived while she was still typing the second message. Stay on it. Don't get off somewhere random. Text me the next stop name you see.

Tilly watched for a stop name. This turned out to be harder than expected, because bus stops are apparently named by people who assume you already know where you are: BEECH ROAD, then THE GREEN, then, magnificently unhelpfully, OPPOSITE THE CHURCH.

Opposite the church, she sent.

Which church

I don't know. A church.

There was a pause during which Tilly could feel her father, four miles away, deciding not to say anything unhelpful. Then: Fine. Stay on. It's a loop service. It'll come back into town. About 20 mins. I'll be at the station.

And that was the strange part, really, because after that the whole thing stopped being an emergency and turned into something else entirely, which was a bus journey.

Tilly looked out of the window properly for the first time. There was a road she had never seen with a launderette on it and a cat sitting in the launderette window like it worked there. There was a school with a mural of a whale on the side, badly painted, obviously by children, one eye significantly larger than the other. There was a hill she had not known the town had, and from the top of it, for about four seconds, she could see the whole place laid out below — the leisure centre, the retail park, the allotments, the roofs of streets she walked down every single day, all of it small and orderly and slightly ridiculous from above.

She had lived here for eleven years and had never once seen it from up here.

The woman across the aisle caught her looking and said, "Best bit of the route, that."

"I've never been on this one before," Tilly said.

"No," said the woman, "you get on the 47." She said it without looking up from her crossword, in the tone of somebody stating a well-known fact about the world, and went back to seventeen across.

The bus came down the hill, went round three more corners, passed a garden centre, and arrived, without any drama at all, at the station.

Her dad was standing by the barrier looking approximately as calm as somebody trying very hard to look calm.

"Right," he said.

"I got the wrong bus."

"You did."

"It was quite good, actually," said Tilly.`,
    questions: [
      { code:"2b", type:"tick-one", marks:1, q:"What was the first thing that made Tilly think something was wrong?",
        options:["A bridge","A mini-roundabout","The scrolling sign above the driver","A stop called Opposite the Church"], correct:1,
        explanation:"The passage says “The first small wrongness” was “a mini-roundabout that shouldn't have been there.” The bridge was the second." },
      { code:"2a", marks:1, q:"Find and copy the word the writer uses to describe how the town outside the window seemed to change.", keywords:[["rearranged"]], answerExpected:"rearranged", answerGreaterDepth:"rearranged (“the town rearranged itself into somewhere she had never been”)", steps:["Look at the short paragraph describing what she sees out of the window.","“Rearranged” suggests everything shifting into a different order."] },
      { code:"2b", type:"tick-two", marks:1, q:"According to the passage, what two things does Tilly do to calm herself down? Tick two.",
        options:["She puts both feet flat on the floor.","She counts backwards from a hundred.","She lists four things she actually knows.","She gets off the bus at the next stop.","She asks the driver for help."], correct:[0,2],
        explanation:"She “put both feet flat on the floor, which her mum had once told her to do” and “said the four things she actually knew.”" },
      { code:"2g", marks:2, q:"The writer compares noticing the mini-roundabout to looking at “a friend who has had a haircut without being able to work out what has changed.” Why is this an effective comparison?", keywords:[["something","wrong","different","changed","odd"],["not being able","without being able","can't","cannot","not sure","work out","identify"]], answerExpected:"It captures the feeling of sensing something is different without being able to say what.", answerGreaterDepth:"It describes a very familiar experience — knowing something has changed but not being able to pin it down — which is exactly how being on the wrong bus starts. It also keeps the moment low-key and slightly funny, which matches Tilly noticing and then simply going back to her phone.", steps:["Think about the feeling the comparison describes: something is different, but you can't identify it.","That matches Tilly's reaction — mild interest, then back to her phone.","It also makes the moment funny rather than frightening, which fits the tone."] },
      { code:"2c", type:"order", marks:1, q:"Number these events 1–4 to show the order in which they happen in the passage.",
        items:["Tilly notices a mini-roundabout that shouldn't be there.","Tilly reads the sign saying MOORFIELD via CANE HILL.","Tilly's dad tells her it is a loop service.","Tilly sees the whole town from the top of the hill."],
        explanation:"The roundabout is the first sign of trouble, then she checks the scrolling sign, then her dad works out it is a loop, and only after that does the bus climb the hill." },
      { code:"2d", marks:2, q:"Why does Tilly feel “slightly ridiculous about the previous forty” seconds?", keywords:[["panic","panick","worried","scared","anxious","upset","frightened"],["easy","quick","simple","nine seconds","fixed","solved","text"]], answerExpected:"Because she had panicked, and then the problem took only nine seconds to fix by texting.", answerGreaterDepth:"She realises that the thing making her panic — nobody knowing where she was — was solvable in about nine seconds with a text message, so forty seconds of rising panic now looks out of proportion to the actual problem.", steps:["Find what she was worrying about: “Nobody has any idea where I am”.","Notice she had already spotted this was “fixable in about nine seconds”.","So the fix was quick and easy, and the panic before it now feels silly to her."] },
      { code:"2f", marks:2, q:"How does the mood of the passage change after Tilly's dad tells her it is a loop service?", keywords:[["worried","panic","anxious","tense","emergency","frightened","stress"],["calm","relax","enjoy","interested","curious","looking","pleasant"]], answerExpected:"It changes from panic to calm curiosity — she starts enjoying the journey.", answerGreaterDepth:"Before the message it is tense: wrongness, a racing chest, unhelpful stop names. Once she knows the bus will bring her back, the passage says the whole thing “stopped being an emergency and turned into something else entirely, which was a bus journey”, and she starts noticing the launderette cat, the whale mural and the view from the hill. The mood shifts from fear to enjoyment.", steps:["Look at what she notices before the message: wrongness, her chest, unhelpful signs.","Look at what she notices after: a cat, a mural, a view she has never seen.","The writer states the change directly: it stopped being an emergency."] },
      { code:"2d", marks:2, q:"What does the woman's reply, “No, you get on the 47,” suggest about the local buses?", keywords:[["regular","every day","familiar","routine","known","same","obvious","ordinary"]], answerExpected:"That the same people use the same routes every day, so it's obvious to her which bus Tilly normally takes.", answerGreaterDepth:"It suggests the routes are so familiar to regular passengers that they recognise which bus somebody belongs on — she states it “in the tone of somebody stating a well-known fact about the world”, without even looking up. To Tilly this journey is an adventure; to the woman it is Tuesday.", steps:["Notice how she says it: without looking up, as a plain fact.","She isn't guessing — she is stating something obvious to her.","This contrast makes Tilly's big adventure feel very ordinary from the outside."] },
      { code:"2h", marks:2, q:"Compare how Tilly feels about the journey at the start of the passage with how she feels at the end.", keywords:[["wrong","panic","worried","scared","anxious","alarm","emergency"],["good","enjoy","glad","pleased","interesting","liked","worth"]], answerExpected:"At the start she is alarmed at being on the wrong bus; at the end she says it was quite good.", answerGreaterDepth:"At the start the journey is a growing problem — wrongnesses, an unhelpful chest, a sign naming places she has never heard of. By the end she has seen parts of her own town she never knew existed and tells her dad, “It was quite good, actually.” The mistake turns into something she is glad happened.", steps:["Start: describe her reaction to realising the bus is wrong.","End: quote her last line to her dad.","Explain the shift — and what caused it: knowing she was safe, then actually looking out of the window."] }
    ]
  },
  {
    id: "why-sea-is-salty",
    genre: "Non-fiction",
    title: "Why the Sea Is Salty and Rivers Are Not",
    teaser: "Rivers flow into the sea. So why does only one of them taste of salt?",
    text: `Rivers run into the sea. Everybody knows this. What almost nobody notices is that it raises an obvious and rather good question: if the sea is made of river water, why is the sea salty and the river not?

The short answer is that rivers are salty too. They are simply so slightly salty that you cannot taste it.

Rain that falls on land is almost pure water, but it does not stay pure for long. Rainwater is very slightly acidic — it dissolves a small amount of carbon dioxide from the air on the way down — and slightly acidic water is surprisingly good at eating rock. Not quickly. But every stream running over stone is very slowly taking that stone apart, molecule by molecule, and carrying the pieces away in solution.

Those dissolved pieces include sodium and chloride, which together make the salt you put on chips. They also include calcium, magnesium, potassium and a long list of others. A river carries the lot downhill, and if you evaporated a bathtub of river water you would be left with a faint crust of minerals at the bottom.

So far, so ordinary. Here is the part that actually answers the question.

When a river reaches the sea, the water does not stay there. Sunlight evaporates it, it rises, forms clouds, and eventually falls again as rain. But evaporation is fussy: it takes the water and leaves everything else behind. Salt does not evaporate. Minerals do not evaporate. The water goes back around the cycle; the dissolved rock stays in the ocean.

That is the entire mechanism. Rivers deliver a tiny amount of dissolved rock to the sea, every day, everywhere, and then the sea keeps it and sends the water back for another load.

Given enough time — and the oceans have had somewhere in the region of four billion years — a tiny amount delivered constantly becomes an enormous amount. The world's oceans now contain something like fifty million billion tonnes of dissolved salt. Spread it evenly over all the land on Earth and it would form a layer around 150 metres deep.

At which point a new question appears, and it is a better one than the first: if rivers have been adding salt for four billion years, why is the sea not far saltier than it is? Why hasn't it just kept getting saltier and saltier?

Because things remove salt too, and this is the part usually left out.

Some salt is taken out biologically. Countless sea creatures build shells and skeletons from dissolved minerals, and when they die those shells sink and become rock on the seafloor. Some is removed chemically, as minerals react with fresh volcanic rock at mid-ocean ridges. Some is removed geologically: shallow seas dry out entirely, leaving vast beds of solid salt behind, which is exactly where the salt in your kitchen was mined from. And some is simply dragged down and out of the system altogether, as ocean floor slides beneath continental plates and is recycled into the mantle.

The result is a balance. Salt goes in from the rivers; salt comes out through shells, chemistry, evaporating seas and disappearing seafloor. As far as scientists can tell, ocean saltiness has been roughly stable for a very long time — not because nothing is happening, but because two enormous processes are running at almost exactly the same rate.

This is worth sitting with, because it is one of the most common patterns in science and one of the hardest to see. Something that looks completely still is often not still at all. It is being pushed hard in two directions at once by forces that happen to cancel out.

The sea is not a bath somebody once filled with salt water. It is a bath with the tap running and the plug out, and the level holding steady.`,
    questions: [
      { code:"2b", type:"tick-one", marks:1, q:"According to the passage, why is rainwater able to dissolve rock?",
        options:["It is very cold.","It is slightly acidic.","It moves very quickly.","It contains salt already."], correct:1,
        explanation:"The passage says “Rainwater is very slightly acidic… and slightly acidic water is surprisingly good at eating rock.”" },
      { code:"2a", marks:1, q:"The passage says minerals are carried away “in solution”. What does in solution mean?", keywords:[["dissolv"]], answerExpected:"dissolved in the water", answerGreaterDepth:"Dissolved in the water — broken down so completely that the minerals are carried along invisibly within the water rather than as visible bits.", steps:["Look at what is happening to the rock: it is taken apart “molecule by molecule”.","If you cannot see the pieces, they are dissolved.","“In solution” is the scientific way of saying dissolved."] },
      { code:"2b", type:"truefalse", marks:2, q:"Using information from the passage, tick one box in each row to show whether each statement is true or false.",
        statements:[
          { text:"River water contains no dissolved minerals at all.", answer:false },
          { text:"Salt evaporates along with water from the sea.", answer:false },
          { text:"Sea creatures remove dissolved minerals by building shells.", answer:true },
          { text:"Ocean saltiness has been roughly stable for a very long time.", answer:true }
        ],
        explanation:"Rivers are “simply so slightly salty that you cannot taste it”. “Salt does not evaporate.” Sea creatures “build shells and skeletons from dissolved minerals”. Saltiness “has been roughly stable for a very long time”." },
      { code:"2c", marks:2, q:"In your own words, explain how salt ends up in the sea.", keywords:[["rain","river","water"],["rock","mineral","dissolv"],["evaporat"]], answerExpected:"Rain dissolves tiny amounts of rock, rivers carry it to the sea, then the water evaporates and leaves the dissolved rock behind.", answerGreaterDepth:"Slightly acidic rainwater slowly dissolves rock as it flows over land, and rivers carry those dissolved minerals down to the sea. When sunlight evaporates seawater, only the water rises — the dissolved rock is left behind. The cycle repeats endlessly, so the sea gradually accumulates what the rivers keep delivering.", steps:["Step 1: rain is slightly acidic and dissolves rock.","Step 2: rivers carry the dissolved minerals to the sea.","Step 3: water evaporates but salt does not, so the salt stays."] },
      { code:"2b", type:"tick-two", marks:1, q:"According to the passage, what are two ways salt is removed from the sea? Tick two.",
        options:["Sea creatures build shells from dissolved minerals.","Rain washes salt back onto the land.","Shallow seas dry out, leaving beds of solid salt.","Fish drink the salt water.","Salt evaporates into the clouds."], correct:[0,2],
        explanation:"The passage lists shells and skeletons that sink and become rock, and shallow seas that “dry out entirely, leaving vast beds of solid salt behind”." },
      { code:"2d", marks:2, q:"Why does the writer say the second question is “a better one than the first”?", keywords:[["obvious","first","simple","easy","answer"],["balance","both","removed","two","stable","harder","deeper"]], answerExpected:"Because it leads to the more interesting idea that salt is both added and removed, keeping the sea in balance.", answerGreaterDepth:"The first question has a fairly simple answer about evaporation. The second — why the sea has not kept getting saltier — forces you to realise salt is also being removed, and leads to the passage's real point: an apparently unchanging thing is actually two huge processes cancelling out.", steps:["Compare what each question leads to.","The first ends with a mechanism; the second uncovers a whole missing half of the story.","The writer says this part is “usually left out” — so it is the more revealing question."] },
      { code:"2g", marks:2, q:"Explain why the final comparison — “a bath with the tap running and the plug out” — is a good way to end the passage.", keywords:[["still","stable","steady","unchanging","same","level"],["both","adding","removing","in","out","two","balance","moving"]], answerExpected:"It shows how something can look completely still while two big processes are actually balancing each other out.", answerGreaterDepth:"A bath with the tap running and the plug out has a level that does not change, even though water is pouring in and out constantly. That captures the passage's main idea exactly: the ocean's saltiness looks fixed, but only because salt is arriving and leaving at almost the same rate. It turns an abstract idea into something the reader can picture instantly.", steps:["Picture the bath: the level stays the same, but nothing is still.","Match it to the sea: salt in from rivers, salt out through shells, chemistry and seafloor.","The image makes the idea of a moving balance easy to hold on to."] },
      { code:"2f", marks:2, q:"How does the writer use questions to organise this passage?", keywords:[["question"],["answer","structur","organis","lead","next","section","move"]], answerExpected:"Each question is answered, and the answer raises the next question, moving the passage forward.", answerGreaterDepth:"The passage opens with a question a reader might genuinely ask, answers it, then uses that answer to raise a second, harder question — why the sea is not far saltier — and answers that too. The questions act as the structure, so the writing reads like a chain of reasoning rather than a list of facts.", steps:["Find the first question in paragraph one, and where it is answered.","Find the second question in the middle of the passage.","Notice each answer creates the next question, driving the passage along."] }
    ]
  },
  {
    id: "last-match-bench",
    genre: "Fiction",
    title: "The Last Match of the Season",
    teaser: "William has played eleven minutes all year. Today there are eleven minutes left.",
    text: `There were eleven minutes left, and William had played eleven minutes all season.

He knew the number exactly, which was probably the worst part. He had not meant to keep count. It had happened the way counting always happens: three minutes against Denbury in September, which he had told everyone about, and then four against the Rec in November, which he had told fewer people about, and then a long stretch of Saturdays in a coat.

Four minutes against Kingsholm in February. Nobody had asked.

Down on the pitch, Ravi went past two players in a manner that made the parents on the far touchline make a noise, and William clapped, and meant it, and hated the small mean part of himself that took a moment to arrive at meaning it.

That was the thing he could not explain to his dad in the car. His dad thought the problem was not playing. It was not. The problem was that not playing did something to how you watched. You could not just enjoy it. Every good thing that happened was also a small piece of evidence about why you were sitting down.

"Warm up, Will."

He did not react, because there was no reason to think it was for him.

"William. Warm up."

The whole bench turned. Coach Bennett was not looking at him; she was watching the game, in the way she always did, standing exactly on the line with her arms folded like she was holding something in place.

William got up. His legs had gone strange. He jogged along behind the goal, and his heart was doing considerably more work than a jog required, and he thought, absurdly, about the fact that he had not touched a ball in a competitive match since February and that his first touch was going to be in front of everybody.

The board went up. Number 14. He came on.

For about ninety seconds, nothing came near him.

This turned out to be a mercy, because it gave him time to remember that he did actually know how to do this. He found a space. He shouted for it, and did not get it, and shouted again, and did not get it, and understood with a sort of calm that he was going to have to keep doing that for the entire eleven minutes and there was no guarantee whatsoever that it would work.

In the eighty-fourth minute it worked.

The ball came to him roughly, half behind him, in a way that meant he had to take it on the turn with a defender arriving. He controlled it — badly, but it stayed — and then he did the thing he had spent eleven weeks not being able to do in a match, which was simply the ordinary thing he could do perfectly well in training: he looked up.

Ravi was making a run nobody had seen.

William played the pass. It was not a spectacular pass. It went along the ground and it was slightly too firm and Ravi had to stretch. But it was in front of him, and it was the right idea, and Ravi got there.

The goal, when it came, was Ravi's. It was completely Ravi's, and William was already turning away and running towards him before it crossed the line.

Afterwards, in the car, his dad said, "You set that up, you know."

"Ravi scored it."

"You set it up."

"I know," said William. "I was there."

He looked out of the window for a while at the hedges going past.

The thing he did not say, because he did not think he could get it out properly, was that the pass was not actually the good part. The good part had been earlier and much smaller: the moment after the second time he shouted for the ball and did not get it, when he had decided, entirely on his own, with no evidence at all that it was going to be worth it, to shout a third time.

Nobody had seen that. It had not been on the pitch in any way that anybody could point at.

He was fairly sure it was the best thing he had done all year.`,
    questions: [
      { code:"2b", type:"tick-one", marks:1, q:"How many minutes had William played before this match?",
        options:["None","Four","Eleven","Eighty-four"], correct:2,
        explanation:"The passage opens: “There were eleven minutes left, and William had played eleven minutes all season.”" },
      { code:"2a", marks:1, q:"Find and copy one word from the passage that shows William was glad nothing came near him for the first ninety seconds.", keywords:[["mercy"]], answerExpected:"mercy", answerGreaterDepth:"mercy (“This turned out to be a mercy”)", steps:["Look for the sentence just after he comes on and nothing happens.","A “mercy” is a piece of luck that spares you something difficult."] },
      { code:"2d", marks:2, q:"Explain what William means when he says the problem was not the not playing, but “what not playing did to how you watched.”", keywords:[["enjoy","watch","spectator","happy","pleasure"],["evidence","reason","reminder","why","proof","sitting","not picked"]], answerExpected:"He couldn't just enjoy the game, because every good thing his team did reminded him why he wasn't playing.", answerGreaterDepth:"He means that sitting out spoiled watching itself. Instead of simply enjoying his team playing well, every good moment doubled as “a small piece of evidence about why you were sitting down” — so the better they played, the worse he felt, which is why he hated the mean part of himself that hesitated before being pleased for Ravi.", steps:["Find the sentence explaining what happens to every good thing that happens.","Link it to the earlier moment with Ravi and the clap he had to “arrive at meaning”.","The problem is that watching stops being simple enjoyment."] },
      { code:"2g", marks:2, q:"The writer describes Coach Bennett standing “with her arms folded like she was holding something in place.” What impression does this create?", keywords:[["calm","controlled","steady","contained","still","tense","holding"]], answerExpected:"It makes her seem controlled and steady, holding herself and the game together.", answerGreaterDepth:"It suggests someone deliberately contained — perhaps holding in tension, perhaps holding the team steady — rather than shouting or pacing. It makes her calm feel like an effort she is making, which contrasts with William's racing heart in the same moment.", steps:["Think about what folded arms usually suggest: control, holding yourself still.","The comparison adds “holding something in place” — as if the calm is doing a job.","Contrast this with William, whose legs have “gone strange”."] },
      { code:"2c", type:"order", marks:1, q:"Number these events 1–4 to show the order in which they happen in the passage.",
        items:["Coach Bennett tells William to warm up.","William comes on as number 14.","William shouts for the ball and does not get it.","William plays the pass to Ravi."],
        explanation:"He is told to warm up, then comes on, then repeatedly shouts for the ball without receiving it, and only in the eighty-fourth minute does the pass happen." },
      { code:"2b", type:"truefalse", marks:2, q:"Using information from the passage, tick one box in each row to show whether each statement is true or false.",
        statements:[
          { text:"William's first touch was a perfectly clean control.", answer:false },
          { text:"The pass William played was slightly too firm.", answer:true },
          { text:"William scored the goal himself.", answer:false },
          { text:"William had not played in a competitive match since February.", answer:true }
        ],
        explanation:"He controlled it “badly, but it stayed”. The pass “was slightly too firm and Ravi had to stretch”. “The goal… was Ravi's.” He “had not touched a ball in a competitive match since February”." },
      { code:"2d", marks:2, q:"Why does William think shouting for the ball a third time was better than the pass?", keywords:[["nobody","no one","unseen","not seen","private","own"],["chose","decided","kept going","again","no evidence","persever","gave up"]], answerExpected:"Because he chose to keep going with no proof it would work, and nobody saw him do it.", answerGreaterDepth:"The pass was visible and lucky enough to lead to a goal, but the third shout was a decision he made alone, “with no evidence at all that it was going to be worth it”, after being ignored twice. It cost him something and nobody witnessed it, which is why he values it more than the moment everyone praised.", steps:["Find what happened before the pass: he shouted twice and was ignored.","Notice how he describes the third shout: his own decision, no evidence it would work.","He points out nobody saw it — so it was not done for anyone else's approval."] },
      { code:"2f", marks:2, q:"Why do you think the writer ends the passage with something “nobody had seen”, rather than with the goal?", keywords:[["goal","obvious","celebrat","praise","seen","visible"],["inside","private","real","himself","own","matter","effort","persever"]], answerExpected:"It shows the achievement that really mattered to William was private, not the visible one everyone praised.", answerGreaterDepth:"Ending on the goal would have made the story about being rewarded. Ending on the unseen third shout makes it about persistence — the writer places the real achievement somewhere nobody clapped for, which is the point the whole passage has been building towards and the one William cannot say out loud in the car.", steps:["Consider what ending on the goal would have suggested: success is what other people see.","Instead the last lines are about a moment with no witnesses.","This shifts the meaning from reward to persistence."] },
      { code:"2h", marks:2, q:"Compare how William feels about Ravi at the start of the passage with how he feels about him after the goal.", keywords:[["mean","hated","small","hesitat","jealous","resent","took a moment"],["ran","turning","towards","celebrat","pleased","genuine","happy"]], answerExpected:"At first he has to work to be pleased for Ravi; after the goal he runs to celebrate with him straight away.", answerGreaterDepth:"Early on he claps and means it, but hates “the small mean part of himself that took a moment to arrive at meaning it” — his gladness is delayed and effortful. After the goal he is “already turning away and running towards him before it crossed the line”, and insists to his dad that “Ravi scored it”. The hesitation has gone entirely.", steps:["Start: find the clap and the delay before he means it.","End: find how quickly he reacts to the goal, before it has even crossed the line.","Explain the change — being involved has removed the resentment."] }
    ]
  },
  {
    id: "how-gps-works",
    genre: "Non-fiction",
    title: "How Your Phone Knows Where You Are",
    teaser: "Your phone doesn't send anything to space. It just listens very carefully to the time.",
    text: `Ask most people how satellite navigation works and they will describe something like radar: your phone sends a signal up to a satellite, the satellite works out where you are, and it sends the answer back down.

Almost none of that is true. Your phone never transmits anything to a satellite. It cannot — the transmitter in a phone is roughly as powerful as a very quiet whisper, and the satellites are twenty thousand kilometres away.

What actually happens is stranger, and rests almost entirely on one thing: extraordinarily accurate clocks.

Every navigation satellite carries an atomic clock, accurate to within a few billionths of a second. Each satellite does one job, endlessly: it broadcasts a message saying, in effect, "I am satellite number seven, I am currently here, and the time right now is exactly this."

That message travels down to Earth as a radio wave, at the speed of light. Your phone does not reply. It simply listens.

When the message arrives, your phone compares the time in the message with the time it thinks it is now. The difference is tiny — perhaps sixty-seven thousandths of a second — but since radio waves travel at a known speed, that delay can be turned into a distance. Sixty-seven thousandths of a second means the satellite is roughly twenty thousand kilometres away.

Knowing you are twenty thousand kilometres from one satellite does not tell you where you are. It tells you that you are somewhere on the surface of an enormous imaginary sphere with that satellite at its centre.

So your phone listens to a second satellite. Now you are on two spheres at once, which means you are somewhere on the circle where those two spheres intersect. A third satellite narrows that circle to just two points — and one of those points is usually somewhere absurd, like deep space, so it can be discarded.

Three satellites, then, and you have your position. This is why the process is called trilateration, and it is worth noticing that it involves no direction-finding at all. Your phone never works out which way a satellite is. It only ever works out how far.

But there is a problem, and it is a big one.

All of this depends on your phone knowing the exact time. The satellites have atomic clocks; your phone has a cheap quartz crystal, which is fine for alarm clocks and hopeless for this. An error of a single thousandth of a second translates into a position error of three hundred kilometres.

The solution is genuinely elegant. Your phone listens to a fourth satellite, which by the mathematics is one more than it needs. With three satellites and a perfect clock, the spheres meet at a single point. With four satellites and a slightly wrong clock, they do not meet at a single point at all — the readings disagree.

So the phone asks itself a question: what single adjustment to my clock would make all four of these readings agree? There is only one answer. The phone applies it, and in doing so it does not just find its position — it corrects its own clock to atomic accuracy, several times a second.

This is why a phone with a satellite fix keeps remarkably good time, and why the technology is used by power grids, banks and broadcasters that need precise timing and do not care about position at all.

There is one final complication, and it is the strangest part of the whole system. The satellites are moving fast, and they are far from Earth's gravity. Both of those things affect time itself, as Einstein predicted: the satellites' clocks run slightly fast compared with clocks on the ground — by around 38 millionths of a second per day.

That sounds negligible. It is not. Uncorrected, it would push positions out by about ten kilometres every day, and the entire system would be useless within minutes of switching on.

So the clocks are deliberately built to run slow, and corrected continuously in orbit. Every time a phone shows a blue dot on a map, it is quietly relying on a correction for the fact that time runs at different speeds in different places — a piece of physics that sounded like pure theory when it was proposed, decades before anyone imagined a use for it.`,
    questions: [
      { code:"2b", type:"tick-one", marks:1, q:"According to the passage, what does a navigation satellite broadcast?",
        options:["The location of every phone below it.","Its own identity, position and the exact time.","A signal asking phones to reply.","A map of the area beneath it."], correct:1,
        explanation:"The passage says each satellite broadcasts a message meaning “I am satellite number seven, I am currently here, and the time right now is exactly this.”" },
      { code:"2a", marks:1, q:"The passage says the solution to the clock problem is “elegant”. What does elegant mean here?", keywords:[["simple","neat","clever","clean"]], answerExpected:"neatly clever — a simple solution to a difficult problem", answerGreaterDepth:"Neat and clever rather than beautiful in appearance — it means the solution solves a hard problem simply, using something the system already had rather than adding anything new.", steps:["“Elegant” here is not about how something looks.","The solution described uses one extra satellite to fix a problem that seemed to need an atomic clock.","So it means clever and neat — a simple answer to a hard problem."] },
      { code:"2b", type:"truefalse", marks:2, q:"Using information from the passage, tick one box in each row to show whether each statement is true or false.",
        statements:[
          { text:"Your phone transmits a signal up to the satellites.", answer:false },
          { text:"Your phone works out the direction each satellite is in.", answer:false },
          { text:"A fourth satellite lets the phone correct its own clock.", answer:true },
          { text:"Satellite clocks run slightly fast compared with clocks on the ground.", answer:true }
        ],
        explanation:"“Your phone never transmits anything to a satellite.” “Your phone never works out which way a satellite is. It only ever works out how far.” The fourth satellite lets it correct its clock “to atomic accuracy”. The satellites' clocks “run slightly fast… by around 38 millionths of a second per day”." },
      { code:"2c", marks:2, q:"Explain, in your own words, how your phone works out how far away a satellite is.", keywords:[["time"],["speed of light","radio","speed"],["distance","far","how far"]], answerExpected:"It compares the time in the satellite's message with the current time, and turns that delay into a distance using the speed of the radio wave.", answerGreaterDepth:"The satellite's message contains the exact time it was sent. The phone compares that with the time it thinks it is now, giving a tiny delay. Because radio waves travel at a known speed — the speed of light — that delay can be multiplied out into a distance, without the phone ever sending anything back.", steps:["Find what the satellite's message contains: an exact time.","Find what the phone does with it: compares it with its own time to get a delay.","Find how delay becomes distance: radio waves travel at a known speed."] },
      { code:"2d", marks:2, q:"Why does the phone need a fourth satellite when three are enough to fix a position?", keywords:[["clock","time"],["wrong","error","inaccurate","correct","adjust","disagree"]], answerExpected:"Because the phone's clock is not accurate enough, and the fourth reading lets it work out and correct the error.", answerGreaterDepth:"Three satellites give a position only if the clock is perfect, and a phone's cheap quartz clock is not — a thousandth of a second of error means three hundred kilometres of position error. With four satellites the readings disagree unless the clock is right, so the phone can calculate the single clock adjustment that makes them agree, fixing both its time and its position.", steps:["Find the problem: the phone's clock is cheap and slightly wrong.","Find why that matters: a tiny time error becomes a huge distance error.","Find the fix: four readings only agree for one clock correction, so the phone can find it."] },
      { code:"2b", type:"tick-two", marks:1, q:"According to the passage, what two things affect the speed at which the satellites' clocks run? Tick two.",
        options:["How fast the satellites are moving.","How cold space is.","How far they are from Earth's gravity.","How many phones are listening.","How old the satellites are."], correct:[0,2],
        explanation:"The passage says: “The satellites are moving fast, and they are far from Earth's gravity. Both of those things affect time itself.”" },
      { code:"2g", marks:2, q:"Why does the writer describe a phone's transmitter as “roughly as powerful as a very quiet whisper”?", keywords:[["weak","quiet","small","feeble","not powerful","tiny"],["far","distance","twenty thousand","impossible","cannot","reach"]], answerExpected:"To show how weak it is compared with the huge distance to the satellites, so it obviously could not reach them.", answerGreaterDepth:"It turns an abstract fact about signal strength into something the reader can judge instantly. Setting a whisper against a distance of twenty thousand kilometres makes the common assumption — that your phone talks to satellites — feel obviously impossible, which is exactly the misconception the paragraph is correcting.", steps:["The writer is correcting a belief most readers hold.","A whisper is something everyone knows is weak and short-range.","Putting it next to twenty thousand kilometres makes the point without any numbers about power."] },
      { code:"2f", marks:2, q:"Why does the writer leave the point about Einstein and time until the very end of the passage?", keywords:[["strange","surprising","hardest","complicated","final","last","biggest"],["build","understand","already","explained","foundation","order","after"]], answerExpected:"Because the reader needs to understand the timing system first before the strangest fact will make sense.", answerGreaterDepth:"The whole system has already been shown to depend on impossibly precise timekeeping, so by the end the reader knows exactly why a 38-millionths-of-a-second error would matter. Saving it for last also makes it the most memorable point — the passage builds from a familiar misconception to a piece of physics that sounded purely theoretical when proposed.", steps:["Notice what the reader has to understand first: everything depends on exact time.","Only once that is clear does a tiny clock difference sound alarming rather than trivial.","Ending there also leaves the reader with the most surprising idea."] }
    ]
  },
  {
    id: "the-shipping-forecast-poem",
    genre: "Poetry",
    title: "Listening to the Shipping Forecast",
    teaser: "A poem about place names read aloud at midnight to people who will never go there.",
    text: `LISTENING TO THE SHIPPING FORECAST

Viking. North Utsire. South Utsire.
Nobody in this house is going to sea.
The cat is on the radiator.
The dishwasher is on its second-to-last thing.

Forties. Cromarty. Forth. Tyne. Dogger.
My mother used to have it on at midnight
and I used to think it was a poem
and I was not, as it turns out, entirely wrong.

Fisher. German Bight. Humber. Thames.
It is a list of boxes drawn on water.
Somebody, once, sat down with a map
and decided where the sea stops being one thing
and starts being another,
and gave the pieces names,
and now a man says them out loud at ten to one
in the calmest voice in Britain.

Dover. Wight. Portland. Plymouth.
Southwesterly five to seven,
occasionally gale eight later,
rain then showers, moderate or good.

Moderate or good.
I have never in my life described anything
as moderate or good
and meant it as precisely as that.

Biscay. Trafalgar. FitzRoy. Sole.
The point is not that I understand it.
The point is that somewhere out past Cornwall
there is weather happening to somebody,
and at ten to one this morning
a stranger will read it to them, slowly,
twice a night, every night,
in case.

Lundy. Fastnet. Irish Sea.
Nobody in this house is going to sea.
The cat has not moved.
The dishwasher has finished.

But I am still awake, and listening,
to a list of places I will never stand in,
being described with total accuracy
to people I will never meet,
by a man who will not be thanked,

and I find, at ten to one,
that I would not swap it
for any song I know.`,
    questions: [
      { code:"2b", type:"tick-one", marks:1, q:"Where is the speaker during the poem?",
        options:["On a boat at sea","At home, awake late at night","In a radio studio","Standing on a beach"], correct:1,
        explanation:"The poem describes the cat on the radiator and the dishwasher finishing, and says “Nobody in this house is going to sea.”" },
      { code:"2a", marks:1, q:"The poem calls the sea areas “a list of boxes drawn on water.” What does this suggest about how the areas were made?", keywords:[["decid","chose","chosen","invent","people","human","drawn","made up"]], answerExpected:"They were decided and drawn by people, not natural divisions.", answerGreaterDepth:"That they are human inventions rather than real features — someone drew lines on a map to divide up water that has no natural boundaries at all, and then named the pieces.", steps:["Boxes are drawn by people; water has no natural edges.","The next lines confirm it: “Somebody, once, sat down with a map / and decided where the sea stops being one thing”.","So the areas are an invention, not something you could see."] },
      { code:"2b", type:"truefalse", marks:2, q:"Using information from the poem, tick one box in each row to show whether each statement is true or false.",
        statements:[
          { text:"The speaker's mother used to listen to the forecast at midnight.", answer:true },
          { text:"The speaker says they fully understand the forecast.", answer:false },
          { text:"The forecast is read twice a night, every night.", answer:true },
          { text:"The speaker wishes the forecast would be replaced with music.", answer:false }
        ],
        explanation:"“My mother used to have it on at midnight.” “The point is not that I understand it.” “twice a night, every night”. The poem ends by saying the speaker “would not swap it / for any song I know.”" },
      { code:"2g", marks:2, q:"Why does the poet repeat the line “Nobody in this house is going to sea”?", keywords:[["repeat","again","echo","twice"],["not for","no use","useless","doesn't need","still","anyway","matters","listen"]], answerExpected:"It stresses that the forecast is useless to the speaker — and yet they still listen.", answerGreaterDepth:"Repeating it frames the poem: the first time it points out that the broadcast has no practical purpose here at all; by the second time the poem has explained why that is exactly the point, so the line lands differently — the speaker listens not because they need it but because someone, somewhere, does.", steps:["Find where the line appears — near the start and near the end.","Ask what has changed in between: the poem has explained who the forecast is really for.","The second use turns a statement of pointlessness into something almost moving."] },
      { code:"2d", marks:2, q:"Explain what the poet means by the single word “in case.”", keywords:[["might","in case","might not","may not","need"],["someone","somebody","anyone","sailor","people","just in case","ready","always"]], answerExpected:"The forecast is read every night whether or not anyone needs it, just in case somebody does.", answerGreaterDepth:"It means the broadcast happens regardless of whether it is being used — nobody knows who is out there or whether they are listening, so it is read carefully, twice a night, every night, on the possibility that one person needs it. The two short words carry the whole idea of care given without any guarantee of being needed.", steps:["Look at what comes before: someone reads the weather aloud to strangers, twice a night.","“In case” explains why: not because anyone has asked, but because someone might need it.","Notice the poet gives it a line of its own, which makes it land harder."] },
      { code:"2g", marks:2, q:"Why do you think the poet includes the ordinary details of the cat and the dishwasher?", keywords:[["ordinary","everyday","normal","domestic","home","cosy","safe","warm"],["contrast","against","compar","sea","storm","weather","danger","far"]], answerExpected:"They contrast the safe, ordinary house with the wild sea being described.", answerGreaterDepth:"They anchor the poem in a completely ordinary, safe kitchen — a cat on a radiator, a dishwasher finishing its cycle — which contrasts sharply with gales and shipping areas out past Cornwall. They also mark time passing: by the end the dishwasher has finished and the cat still has not moved, while the speaker is still awake and listening.", steps:["Notice what kind of details these are: small, domestic, safe.","Contrast them with what the forecast describes: gale eight, weather happening to somebody.","Notice they change slightly by the end, marking how long the speaker has stayed up."] },
      { code:"2f", marks:2, q:"How does the poet use the lists of place names to shape the poem?", keywords:[["list","names","between","break","separat","stanza","start","section"],["rhythm","chant","music","poem","pattern","sound"]], answerExpected:"The place names break up the poem into sections and give it a chanting rhythm like the real broadcast.", answerGreaterDepth:"The lists open each section, so the poem is structured the way the broadcast itself is — names, then detail, then names again. They also give it the steady, chanting rhythm of the real forecast, which supports the speaker's childhood idea that it was already a poem before anyone wrote one about it.", steps:["Notice where the place names appear: at the start of nearly every section.","They act like the headings of the real broadcast, dividing the poem up.","Their repeated rhythm makes the poem sound like the thing it is describing."] },
      { code:"2h", marks:2, q:"Compare what the speaker thought about the forecast as a child with what they think about it now.", keywords:[["child","young","thought","used to","poem"],["now","still","understand","realise","people","care","meet","not swap"]], answerExpected:"As a child they thought it was a poem; now they still love it, but because of who it is for.", answerGreaterDepth:"As a child the speaker thought the forecast was simply a poem, drawn in by the sound of the names. As an adult they say they were “not, as it turns out, entirely wrong”, but their reason has changed: what moves them now is not the language but the fact that it is read with total accuracy, every night, to people they will never meet, by someone who will not be thanked.", steps:["Find the childhood view in the second section.","Find what the speaker values by the end — accuracy, care, strangers.","Explain the shift: from liking the sound to understanding the purpose."] }
    ]
  },
];

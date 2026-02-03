export interface UpdatePost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string; // HTML or Markdown content
    date: string;
    category: string;
}

export const updatesPosts: UpdatePost[] = [
    {
        id: "1",
        slug: "after-effects-loop-expression",
        title: "Mastering the Loop: How to Use loopOut() for Infinite Backgrounds in After Effects",
        excerpt: "Stop duplicating keyframes. Learning to use the powerful loopOut() expression to create seamless, infinite animations for backgrounds and motion graphics.",
        date: "February 2, 2024",
        category: "Tutorial",
        content: `
      <h2>The Problem: Tedious Keyframe Copying</h2>
      <p>Every Motion Designer knows the pain. You have a background element—maybe a cloud passing by, or a geometric pattern spinning—and you need it to run for the full 30-second duration of your comp. You create the initial animation, say from 0 to 5 seconds. Then, you copy the keyframes and paste them... and paste them... and paste them.</p>
      <p>Not only is this tedious, but it also makes your timeline messy and your project file heavy. And what if you want to change the speed? You have to delete all those copies and start over. There has to be a better way.</p>
      
      <h2>The Solution: The loopOut() Expression</h2>
      <p>Enter <code>loopOut()</code>. This small snippet of code is the most essential expression in After Effects. It tells a property to repeat its keyframed animation indefinitely.</p>
      
      <h3>How to Apply It</h3>
      <ol>
        <li>Animate a property (e.g., Rotation) with at least two keyframes.</li>
        <li>Hold <strong>Alt</strong> (Windows) or <strong>Option</strong> (Mac) and click the stopwatch icon for that property.</li>
        <li>In the expression editor that appears, type: <code>loopOut()</code></li>
        <li>Click away to apply.</li>
      </ol>
      
      <h3>Understanding the Modes</h3>
      <p>The <code>loopOut()</code> function takes arguments. The default is <code>"cycle"</code>, but there are others:</p>
      <ul>
        <li><code>loopOut("cycle")</code>: Starts the animation over from the first keyframe. Great for spinning wheels or repeating patterns.</li>
        <li><code>loopOut("pingpong")</code>: Plays the animation forward, then backward, then forward. Perfect for swaying trees, breathing characters, or bouncing elements.</li>
        <li><code>loopOut("continue")</code>: Takes the speed of the last keyframe and continues the motion forever. Ideal for moving a car or camera continuously in one direction without adding more keyframes.</li>
      </ul>
      
      <h3>Practical Use Case: The Infinite Background</h3>
      <p>Let’s say you are building a "Cyberpunk" style HUD background for a client (maybe even for a portfolio site like this one!). You want grid lines to scroll endlessly.</p>
      <p>Instead of making a massive 10,000px layer, simply:</p>
      <ol>
        <li>Create a grid layer.</li>
        <li>Animate the <strong>Position</strong> to move exactly one grid-unit width.</li>
        <li>Apply <code>loopOut("cycle")</code>.</li>
      </ol>
      <p>Now, no matter how long you extend your composition, the grid will flow seamlessly. You've saved time, kept your timeline clean, and looked like a pro.</p>
      
      <h2>Conclusion</h2>
      <p>Expressions aren't just for coders. They are for efficient designers. Mastering <code>loopOut()</code> is your first step into a larger world of automated animation.</p>
    `
    },
    {
        id: "3",
        slug: "typography-in-motion-guide",
        title: "Kinetic Typography: 5 Rules for Better Text Animation",
        excerpt: "Stop using default fade-ins. Here are the 5 principles of kinetic typography that will make your motion graphics look professional.",
        date: "February 10, 2024",
        category: "Design",
        content: `
      <h2>Text is More Than Reading</h2>
      <p>In motion graphics, text is a character. It has emotion, weight, and personality. If you are just using a simple opacity fade for your titles, you are missing 50% of the communication.</p>

      <h3>Rule 1: Overshoot (The Bounce)</h3>
      <p>Nothing in real life stops instantly. When a car stops, it dips forward. When text slides in, it should go slightly <em>past</em> its final position and then settle back. This is called "overshoot."</p>
      <p><em>Technique:</em> In After Effects, don't just ease the keyframes. Manually adjust the graph editor to create a small "hump" past the value of the final keyframe.</p>

      <h3>Rule 2: Cascade (The Delay)</h3>
      <p>Don't animate the whole sentence at once. Animate by word, or even better, by character. Offsetting the start time of each letter by just 2 frames creates a beautiful "wave" effect that leads the eye.</p>
      <p><em>Technique:</em> Use a Text Animator with a "Range Selector." Animate the "Start" from 0% to 100% and set the shape to "Ramp Up" for a smooth cascade.</p>

      <h3>Rule 3: Tracking (Spacing)</h3>
      <p>Cinematic titles often have wide spacing (tracking). As the text scales down or fades out, try increasing the tracking. It adds a sense of grandeur and scale.</p>

      <h3>Rule 4: Motion Blur is Mandatory</h3>
      <p>Digital movement looks jagged without blur. Always enable Motion Blur for your text layers. It mimics how our eyes perceive fast movement and blends the frames together for a smoother look.</p>

      <h3>Rule 5: Keep it Readable</h3>
      <p>The coolest animation is useless if no one can read it. Never sacrifice legibility for style. If the animation is too fast or chaotic, slow it down. The message comes first.</p>

      <h2>Final Thoughts</h2>
      <p>Next time you are working on a title sequence, try applying just one of these rules. You'll verify the difference immediately. Kinetic typography is about feeling, not just movement.</p>
    `
    }
];

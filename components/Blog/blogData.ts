export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string; // HTML or Markdown content
    date: string;
    category: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: "1",
        slug: "after-effects-loop-expression",
        title: "Mastering the Loop: How to Use loopOut() for Infinite Backgrounds in After Effects",
        excerpt: "Stop duplicating keyframes. Leaning to use the powerful loopOut() expression to create seamless, infinite animations for backgrounds and motion graphics.",
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
      <p>Expressions aren't just for coders. They are for efficient designers. Mastering <code>loopOut()</code> is your first step into a larger world of automated animation. Stay tuned for more tips from the Sizzler Fx lab.</p>
    `
    }
];

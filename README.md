# Slideshow Party 🪩

An impromptu hack to show 400+ photos as a slideshow on a projector at a workplace leaving party (DJ included).

Runs a webserver locally, which you can load in your browser and then set to full-screen mode.

Shows photo placed in the `photos` folder in a slideshow on a projector. The photos are shown in a random order.

Photos are shown for 5 seconds each and fade in with a random CSS filter effect animation (using CSS should make it more efficient than using JavaScript).

The decorations are party related emojis that just float around to add a little bit more interest.

## Get Started

1. Clone the repo
2. Add photos to the `photos` folder
3. run `bun install`
4. run `bun run build:photos` to generate an array of photo file names
5. run `bun run dev` to start the server
6. Open the browser at <http://localhost:5173/>

## Example

https://github.com/user-attachments/assets/400caad8-76b4-4104-b0bf-c23e9c4f2e5f

## Credits

Various [Unsplash](https://unsplash.com/photos/a-group-of-people-standing-around-in-a-room-9vDdkxSCAD4) photographers for the photos used in the `photos` folder.

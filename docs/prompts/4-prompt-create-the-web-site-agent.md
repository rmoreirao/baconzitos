---- Instructions -----
1) Read and fully understand all the requirements listed below.
2) Develop a fun, responsive Web App that calculates the ingredients for bacon brine based on the input weight (in KG) of bacon.
3) After development, ensure every requirement is implemented. Review all pages and navigation to guarantee correctness.

---- Functional Requirements -----
- The app must prompt the user to input the weight of bacon (in KG).
- The main page should include:
    - A top logo.
    - An input field for bacon weight (in KG).
    - A clearly labeled "Calculate" button.
- When the "Calculate" button is clicked:
    - Validate the input. Provide clear error messages for invalid or empty entries.
    - Convert the weight to the appropriate scale to calculate:
        - 45% water (in ml)
        - 3.5% sugar (in grams)
        - 3.5% salt (in grams)
        - 0.35% nitrate (in grams)
        - 1% black pepper (in grams)
    - Perform proper unit conversions where necessary.
    - Animate the transition to the result using CSS transitions. (Consider playful animations, e.g., a spinning icon or a sliding panel.)
- Display the calculated results in a well-formatted table that includes:
    - Proper icons (using Google Material Icons)
    - Correct measurement units

---- Technical Requirements (Front-End) -----
- Develop the whole project using only HTML, JavaScript, and CSS.
- All icons must be sourced from "Google Material Icons."
- Use CSS transitions for smooth state changes in menus and interactive components.
- Ensure animations are optimized for both desktop and mobile views.
- The website design should be responsive, working seamlessly on various devices (phones, tablets, desktops).
- Implement accessibility features including:
    - Proper contrast ratios.
    - ARIA labels for all interactive components and animations.
    - Keyboard navigability.
- Generate at least 5 different products per category as additional data to be integrated on the website (this may represent related products or items available in your WebStore).

---- Additional Aesthetic & Branding Notes -----
- The website should have a playful, humorous tone.
- Use vibrant colors, fun typography, and humorous copy for titles, instructions, and error messages.
- Ensure that the overall design reflects a "fun" theme while remaining user-friendly and accessible.


--------UI Mockup-----------

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function PiggyBaconCalculator() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAF3F3] p-4">
      {/* Logo Placeholder */}
      <div className="mb-6 text-center text-[#FF69B4] text-3xl font-bold">
        🐷 Funny Pig Bacon Calculator
      </div>

      {/* Main Card */}
      <Card className="w-full max-w-md bg-[#FFB6C1] text-[#333] p-6 rounded-2xl shadow-lg">
        <CardContent className="flex flex-col gap-4">
          <label htmlFor="baconWeight" className="font-semibold">
            Enter Bacon Weight (KG):
          </label>
          <input
            id="baconWeight"
            type="number"
            className="p-2 border border-[#333] rounded-md text-[#333] bg-white"
            placeholder="Enter weight..."
          />

          <Button className="bg-[#FF69B4] hover:bg-[#FFD700] text-white font-bold py-2 rounded-lg transition">
            Calculate
          </Button>
        </CardContent>
      </Card>

      {/* Footer */}
      <p className="mt-4 text-sm text-[#333]">Made with ❤️ for bacon lovers</p>
    </div>
  );
}

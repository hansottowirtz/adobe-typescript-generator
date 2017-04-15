/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class TextComposer extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * Considers a network of break points for a range of lines and 
			 * thus optimizes earlier lines in the paragraph to eliminate 
			 * especially unattractive breaks later on. Results in more 
			 * even spacing and fewer hyphens. The Adobe Every-line 
			 * composer approaches composition by identifying possible 
			 * breakpoints, evaluating them, and assigning a weighted 
			 * penalty based on these principles: Highest importance is 
			 * given to evenness of letter and word spacing; Possible 
			 * breakpoints are evaluated and penalized according to how 
			 * much they deviate from optimal spacing; Hyphenation is 
			 * avoided when possible; Breakpoints that require hyphenation 
			 * are penalized more than those that create uneven spacing; 
			 * Good breakpoints are preferred over bad breakpoints.
			 */
			public static readonly ADOBEEVERYLINE: Adobe.Photoshop.TextComposer;
			/**
			 * Offers a traditional approach to composing type one line at 
			 * a time. Useful if you prefer to have manual control over how 
			 * lines break. Uses the following principles when considering 
			 * a breakpoint: Compressed or expanded word spacing is 
			 * preferable to hyphenation; Hyphenation is preferable to 
			 * compressed or expanded letter spacing; If spacing must be 
			 * adjusted, compression is better than expansion.
			 */
			public static readonly ADOBESINGLELINE: Adobe.Photoshop.TextComposer;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Constructor */
			public constructor();
		}
	}
}
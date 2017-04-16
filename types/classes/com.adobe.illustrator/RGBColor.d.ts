/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** An RGB color specification */
		class RGBColor extends Adobe.Illustrator.Color {
			/**
			 * the blue color value (between 0.0 and 255.0) ( 0.0 - 255.0; 
			 * default: 0.0 )
			 * @type {number}
			 */
			public blue: number;
			/**
			 * the green color value (between 0.0 and 255.0) ( 0.0 - 255.0; 
			 * default: 0.0 )
			 * @type {number}
			 */
			public green: number;
			/**
			 * the red color value (between 0.0 and 255.0) ( 0.0 - 255.0; 
			 * default: 0.0 )
			 * @type {number}
			 */
			public red: number;
		}
	}
}
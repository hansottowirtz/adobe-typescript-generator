/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class CMYKColor extends Color {
			/**
			 * the black color value (between 0.0 and 100.0) ( 0.0 - 100.0; 
			 * default: 0.0 )
			 */
			public black: number;
			/**
			 * the cyan color value (between 0.0 and 100.0) ( 0.0 - 100.0; 
			 * default: 0.0 )
			 */
			public cyan: number;
			/**
			 * the magenta color value (between 0.0 and 100.0) ( 0.0 - 
			 * 100.0; default: 0.0 )
			 */
			public magenta: number;
			/**
			 * the yellow color value (between 0.0 and 100.0) ( 0.0 - 
			 * 100.0; default: 0.0 )
			 */
			public yellow: number;
		}
	}
}
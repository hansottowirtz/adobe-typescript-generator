/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class LabColor extends Color {
			/**
			 * the a color value (between -128.0 and 127.0) ( -128.0 - 
			 * 127.0; default: 0.0 )
			 */
			public a: number;
			/**
			 * the b color value (between -128.0 and 127.0) ( -128.0 - 
			 * 127.0; default: 0.0 )
			 */
			public b: number;
			/**
			 * the L color value (between 0.0 and 100.0) ( 0.0 - 100.0; 
			 * default: 0.0 )
			 */
			public l: number;
		}
	}
}
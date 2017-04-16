/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A gray color specification */
		class GrayColor extends Adobe.Illustrator.Color {
			/**
			 * the gray value (between 0.0 and 100.0) ( 0.0 - 100.0; 
			 * default: 0.0 )
			 */
			public gray: number;
		}
	}
}
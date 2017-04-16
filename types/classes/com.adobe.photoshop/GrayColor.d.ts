/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** A gray color specification */
		class GrayColor extends Adobe.Photoshop.Color {
			/**
			 * the gray value ( 0.0 - 100.0; default: 0.0 )
			 * @type {number}
			 */
			public gray: number;
		}
	}
}
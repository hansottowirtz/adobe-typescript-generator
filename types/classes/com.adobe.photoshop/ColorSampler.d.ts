/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class ColorSampler extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/** The color of the color sampler. */
			public readonly color: Adobe.Photoshop.SolidColor;
			/** The position of the color sampler in the document. */
			public readonly position: any[];
			/**
			 * Moves the color sampler to a new location.
			 * @param {any[]} position - Position of destination (unit 
			 * value)
			 */
			public move(position: any[]): void;
			/** delete the object */
			public remove(): void;
		}
	}
}
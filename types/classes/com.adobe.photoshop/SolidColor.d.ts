/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class SolidColor extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/** return a grayscale representation of the color */
			public cmyk: Adobe.Photoshop.CMYKColor;
			/** return a grayscale representation of the color */
			public gray: Adobe.Photoshop.GrayColor;
			/** return a grayscale representation of the color */
			public hsb: Adobe.Photoshop.HSBColor;
			/** return a grayscale representation of the color */
			public lab: Adobe.Photoshop.LabColor;
			/** color model */
			public model: Adobe.Photoshop.ColorModel;
			/** The nearest web color to the current color */
			public readonly nearestWebColor: Adobe.Photoshop.RGBColor;
			/** return an rgb representation of the color */
			public rgb: Adobe.Photoshop.RGBColor;
			/**
			 * Compares two colors.
			 * @param {Adobe.Photoshop.SolidColor} color - Another color to 
			 * compare with.
			 */
			public isEqual(color: Adobe.Photoshop.SolidColor): boolean;
		}
	}
}
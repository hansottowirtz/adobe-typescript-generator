/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** A color value */
		class SolidColor extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * return a grayscale representation of the color
			 * @type {Adobe.Photoshop.CMYKColor}
			 */
			public cmyk: Adobe.Photoshop.CMYKColor;
			/**
			 * return a grayscale representation of the color
			 * @type {Adobe.Photoshop.GrayColor}
			 */
			public gray: Adobe.Photoshop.GrayColor;
			/**
			 * return a grayscale representation of the color
			 * @type {Adobe.Photoshop.HSBColor}
			 */
			public hsb: Adobe.Photoshop.HSBColor;
			/**
			 * return a grayscale representation of the color
			 * @type {Adobe.Photoshop.LabColor}
			 */
			public lab: Adobe.Photoshop.LabColor;
			/**
			 * color model
			 * @type {Adobe.Photoshop.ColorModel}
			 */
			public model: Adobe.Photoshop.ColorModel;
			/**
			 * The nearest web color to the current color
			 * @type {Adobe.Photoshop.RGBColor}
			 * @readonly
			 */
			public readonly nearestWebColor: Adobe.Photoshop.RGBColor;
			/**
			 * return an rgb representation of the color
			 * @type {Adobe.Photoshop.RGBColor}
			 */
			public rgb: Adobe.Photoshop.RGBColor;
			/**
			 * return true if the provided color is visually equal to this 
			 * color
			 * @param {Adobe.Photoshop.SolidColor} color color to compare 
			 * to
			 * @returns {boolean}
			 */
			public isEqual(color: Adobe.Photoshop.SolidColor): boolean;
		}
	}
}
/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Settings related to opening a camera RAW document */
		class CameraRAWOpenOptions extends Adobe.Photoshop.OpenOptions {
			/**
			 * number of bits per channel
			 * @type {Adobe.Photoshop.BitsPerChannelType}
			 */
			public bitsPerChannel: Adobe.Photoshop.BitsPerChannelType;
			/**
			 * the blue hue of the shot
			 * @type {number}
			 */
			public blueHue: number;
			/**
			 * the blue saturation of the shot
			 * @type {number}
			 */
			public blueSaturation: number;
			/**
			 * the brightness of the shot
			 * @type {number}
			 */
			public brightness: number;
			/**
			 * the chromatic aberration B/Y of the shot
			 * @type {number}
			 */
			public chromaticAberrationBY: number;
			/**
			 * the chromatic aberration R/C of the shot
			 * @type {number}
			 */
			public chromaticAberrationRC: number;
			/**
			 * the color noise reduction of the shot
			 * @type {number}
			 */
			public colorNoiseReduction: number;
			/**
			 * colorspace for image
			 * @type {Adobe.Photoshop.ColorSpaceType}
			 */
			public colorSpace: Adobe.Photoshop.ColorSpaceType;
			/**
			 * the constrast of the shot
			 * @type {number}
			 */
			public contrast: number;
			/**
			 * the exposure of the shot
			 * @type {number}
			 */
			public exposure: number;
			/**
			 * the green hue of the shot
			 * @type {number}
			 */
			public greenHue: number;
			/**
			 * the green saturation of the shot
			 * @type {number}
			 */
			public greenSaturation: number;
			/**
			 * the luminance smoothing of the shot
			 * @type {number}
			 */
			public luminanceSmoothing: number;
			/**
			 * the red hue of the shot
			 * @type {number}
			 */
			public redHue: number;
			/**
			 * the red saturation of the shot
			 * @type {number}
			 */
			public redSaturation: number;
			/**
			 * the resolution of the document (in pixels per inch)
			 * @type {number}
			 */
			public resolution: number;
			/**
			 * the saturation of the shot
			 * @type {number}
			 */
			public saturation: number;
			/**
			 * global settings for all Camera RAW options ( default: 
			 * CameraRAWSettingsType.CAMERA )
			 * @type {Adobe.Photoshop.CameraRAWSettingsType}
			 */
			public settings: Adobe.Photoshop.CameraRAWSettingsType;
			/**
			 * the shadows of the shot
			 * @type {number}
			 */
			public shadows: number;
			/**
			 * the shadow tint of the shot
			 * @type {number}
			 */
			public shadowTint: number;
			/**
			 * the sharpness of the shot
			 * @type {number}
			 */
			public sharpness: number;
			/**
			 * size of the new document
			 * @type {Adobe.Photoshop.CameraRAWSize}
			 */
			public size: Adobe.Photoshop.CameraRAWSize;
			/**
			 * the temperature of the shot
			 * @type {number}
			 */
			public temperature: number;
			/**
			 * the tint of the shot
			 * @type {number}
			 */
			public tint: number;
			/**
			 * the vignetting amount of the shot
			 * @type {number}
			 */
			public vignettingAmount: number;
			/**
			 * the vignetting mid point of the shot
			 * @type {number}
			 */
			public vignettingMidpoint: number;
			/**
			 * white balance options for the image
			 * @type {Adobe.Photoshop.WhiteBalanceType}
			 */
			public whiteBalance: Adobe.Photoshop.WhiteBalanceType;
		}
	}
}
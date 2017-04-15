/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class CameraRAWOpenOptions extends Adobe.Photoshop.OpenOptions {
			/** number of bits per channel */
			public bitsPerChannel: Adobe.Photoshop.BitsPerChannelType;
			/** the blue hue of the shot */
			public blueHue: number;
			/** the blue saturation of the shot */
			public blueSaturation: number;
			/** the brightness of the shot */
			public brightness: number;
			/** the chromatic aberration B/Y of the shot */
			public chromaticAberrationBY: number;
			/** the chromatic aberration R/C of the shot */
			public chromaticAberrationRC: number;
			/** the color noise reduction of the shot */
			public colorNoiseReduction: number;
			/** colorspace for image */
			public colorSpace: Adobe.Photoshop.ColorSpaceType;
			/** the constrast of the shot */
			public contrast: number;
			/** the exposure of the shot */
			public exposure: number;
			/** the green hue of the shot */
			public greenHue: number;
			/** the green saturation of the shot */
			public greenSaturation: number;
			/** the luminance smoothing of the shot */
			public luminanceSmoothing: number;
			/** the red hue of the shot */
			public redHue: number;
			/** the red saturation of the shot */
			public redSaturation: number;
			/** the resolution of the document (in pixels per inch) */
			public resolution: number;
			/** the saturation of the shot */
			public saturation: number;
			/**
			 * global settings for all Camera RAW options ( default: 
			 * CameraRAWSettingsType.CAMERA )
			 */
			public settings: Adobe.Photoshop.CameraRAWSettingsType;
			/** the shadows of the shot */
			public shadows: number;
			/** the shadow tint of the shot */
			public shadowTint: number;
			/** the sharpness of the shot */
			public sharpness: number;
			/** size of the new document */
			public size: Adobe.Photoshop.CameraRAWSize;
			/** the temperature of the shot */
			public temperature: number;
			/** the tint of the shot */
			public tint: number;
			/** the vignetting amount of the shot */
			public vignettingAmount: number;
			/** the vignetting mid point of the shot */
			public vignettingMidpoint: number;
			/** white balance options for the image */
			public whiteBalance: Adobe.Photoshop.WhiteBalanceType;
		}
	}
}
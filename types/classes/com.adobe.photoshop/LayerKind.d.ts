/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** The types of art layers. */
		class LayerKind extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** Black and white layer. */
			public static readonly BLACKANDWHITE: Adobe.Photoshop.LayerKind;
			/** Brightness contrast adjustment layer. */
			public static readonly BRIGHTNESSCONTRAST: Adobe.Photoshop.LayerKind;
			/** Channel mixer adjustment layer. */
			public static readonly CHANNELMIXER: Adobe.Photoshop.LayerKind;
			/** Color balance adjustment layer. */
			public static readonly COLORBALANCE: Adobe.Photoshop.LayerKind;
			/** Curves adjustment layer. */
			public static readonly CURVES: Adobe.Photoshop.LayerKind;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Exposure layer. */
			public static readonly EXPOSURE: Adobe.Photoshop.LayerKind;
			/** Gradient fill. */
			public static readonly GRADIENTFILL: Adobe.Photoshop.LayerKind;
			/** Gradient map adjustment laye. */
			public static readonly GRADIENTMAP: Adobe.Photoshop.LayerKind;
			/** Hue saturation adjustment laye. */
			public static readonly HUESATURATION: Adobe.Photoshop.LayerKind;
			/** Invert adjustment layer. */
			public static readonly INVERSION: Adobe.Photoshop.LayerKind;
			/** 3D layer. */
			public static readonly LAYER3D: Adobe.Photoshop.LayerKind;
			/** Levels adjustment layer. */
			public static readonly LEVELS: Adobe.Photoshop.LayerKind;
			/** Normal. */
			public static readonly NORMAL: Adobe.Photoshop.LayerKind;
			/** Pattern fill. */
			public static readonly PATTERNFILL: Adobe.Photoshop.LayerKind;
			/** Photo filter layer. */
			public static readonly PHOTOFILTER: Adobe.Photoshop.LayerKind;
			/** Posterize adjustment layer. */
			public static readonly POSTERIZE: Adobe.Photoshop.LayerKind;
			/** Selective color adjustment layer. */
			public static readonly SELECTIVECOLOR: Adobe.Photoshop.LayerKind;
			/** Smart object layer. */
			public static readonly SMARTOBJECT: Adobe.Photoshop.LayerKind;
			/** Solid color. */
			public static readonly SOLIDFILL: Adobe.Photoshop.LayerKind;
			/** Text. */
			public static readonly TEXT: Adobe.Photoshop.LayerKind;
			/** Threshold adjustment layer. */
			public static readonly THRESHOLD: Adobe.Photoshop.LayerKind;
			/** Vibrance layer. */
			public static readonly VIBRANCE: Adobe.Photoshop.LayerKind;
			/** Video layer. */
			public static readonly VIDEO: Adobe.Photoshop.LayerKind;
			/** Constructor */
			public constructor();
		}
	}
}
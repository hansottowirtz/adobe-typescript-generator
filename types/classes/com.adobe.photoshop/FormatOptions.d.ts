/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** The options for saving a JPEG file. */
		class FormatOptions extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Baseline (Optimized). Optimized color and a slightly reduced 
			 * file size.
			 */
			public static readonly OPTIMIZEDBASELINE: Adobe.Photoshop.FormatOptions;
			/**
			 * Displays a series of increasingly detailed scans as the 
			 * image downloads.
			 */
			public static readonly PROGRESSIVE: Adobe.Photoshop.FormatOptions;
			/** Baseline (Standard). Recognized by most web browsers. */
			public static readonly STANDARDBASELINE: Adobe.Photoshop.FormatOptions;
			/** Constructor */
			public constructor();
		}
	}
}
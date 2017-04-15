/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** The placement of paragraph text within the bounding box. */
		class Justification extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** Text is centered on each line. */
			public static readonly CENTER: Adobe.Photoshop.Justification;
			/**
			 * Justifies all lines except the last, which is 
			 * center-aligned.
			 */
			public static readonly CENTERJUSTIFIED: Adobe.Photoshop.Justification;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Justifies all lines including the last, which is 
			 * force-justified.
			 */
			public static readonly FULLYJUSTIFIED: Adobe.Photoshop.Justification;
			/** Aligns the left edges, leaving the right edge ragged. */
			public static readonly LEFT: Adobe.Photoshop.Justification;
			/** Justifies all lines except the last, which is left-aligned. */
			public static readonly LEFTJUSTIFIED: Adobe.Photoshop.Justification;
			/** Aligns the right edges, leaving the left edge ragged. */
			public static readonly RIGHT: Adobe.Photoshop.Justification;
			/**
			 * Justifies all lines except the last, which is right-aligned.
			 */
			public static readonly RIGHTJUSTIFIED: Adobe.Photoshop.Justification;
			/** Constructor */
			public constructor();
		}
	}
}
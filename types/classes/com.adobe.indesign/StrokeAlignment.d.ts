/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class StrokeAlignment extends Adobe.Csawlib.CSEnumBase {
			/**
			 * The stroke straddles the path.
			 * @type {Adobe.Indesign.StrokeAlignment}
			 * @readonly
			 */
			public static readonly CENTER_ALIGNMENT: Adobe.Indesign.StrokeAlignment;
			/**
			 * Alias for CENTER_ALIGNMENT. The stroke straddles the path.
			 * @type {Adobe.Indesign.StrokeAlignment}
			 * @readonly
			 */
			public static readonly centerAlignment: Adobe.Indesign.StrokeAlignment;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * The stroke is inside the path.
			 * @type {Adobe.Indesign.StrokeAlignment}
			 * @readonly
			 */
			public static readonly INSIDE_ALIGNMENT: Adobe.Indesign.StrokeAlignment;
			/**
			 * Alias for INSIDE_ALIGNMENT. The stroke is inside the path.
			 * @type {Adobe.Indesign.StrokeAlignment}
			 * @readonly
			 */
			public static readonly insideAlignment: Adobe.Indesign.StrokeAlignment;
			/**
			 * The stroke is outside the path, like a picture frame.
			 * @type {Adobe.Indesign.StrokeAlignment}
			 * @readonly
			 */
			public static readonly OUTSIDE_ALIGNMENT: Adobe.Indesign.StrokeAlignment;
			/**
			 * Alias for OUTSIDE_ALIGNMENT. The stroke is outside the path, 
			 * like a picture frame.
			 * @type {Adobe.Indesign.StrokeAlignment}
			 * @readonly
			 */
			public static readonly outsideAlignment: Adobe.Indesign.StrokeAlignment;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}
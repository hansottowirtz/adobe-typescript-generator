/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class StrokeAlignment extends Adobe.Csawlib.CSEnumBase {
			/**
			 * The stroke straddles the path.
			 * @type {Adobe.Incopy.StrokeAlignment}
			 * @readonly
			 */
			public static readonly CENTER_ALIGNMENT: Adobe.Incopy.StrokeAlignment;
			/**
			 * Alias for CENTER_ALIGNMENT. The stroke straddles the path.
			 * @type {Adobe.Incopy.StrokeAlignment}
			 * @readonly
			 */
			public static readonly centerAlignment: Adobe.Incopy.StrokeAlignment;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * The stroke is inside the path.
			 * @type {Adobe.Incopy.StrokeAlignment}
			 * @readonly
			 */
			public static readonly INSIDE_ALIGNMENT: Adobe.Incopy.StrokeAlignment;
			/**
			 * Alias for INSIDE_ALIGNMENT. The stroke is inside the path.
			 * @type {Adobe.Incopy.StrokeAlignment}
			 * @readonly
			 */
			public static readonly insideAlignment: Adobe.Incopy.StrokeAlignment;
			/**
			 * The stroke is outside the path, like a picture frame.
			 * @type {Adobe.Incopy.StrokeAlignment}
			 * @readonly
			 */
			public static readonly OUTSIDE_ALIGNMENT: Adobe.Incopy.StrokeAlignment;
			/**
			 * Alias for OUTSIDE_ALIGNMENT. The stroke is outside the path, 
			 * like a picture frame.
			 * @type {Adobe.Incopy.StrokeAlignment}
			 * @readonly
			 */
			public static readonly outsideAlignment: Adobe.Incopy.StrokeAlignment;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}
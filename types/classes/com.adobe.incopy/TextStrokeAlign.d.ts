/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class TextStrokeAlign extends Adobe.Csawlib.CSEnumBase {
			/**
			 * The stroke straddles the path.
			 * @type {Adobe.Incopy.TextStrokeAlign}
			 * @readonly
			 */
			public static readonly CENTER_ALIGNMENT: Adobe.Incopy.TextStrokeAlign;
			/**
			 * Alias for CENTER_ALIGNMENT. The stroke straddles the path.
			 * @type {Adobe.Incopy.TextStrokeAlign}
			 * @readonly
			 */
			public static readonly centerAlignment: Adobe.Incopy.TextStrokeAlign;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * The stroke is outside the path, like a picture frame.
			 * @type {Adobe.Incopy.TextStrokeAlign}
			 * @readonly
			 */
			public static readonly OUTSIDE_ALIGNMENT: Adobe.Incopy.TextStrokeAlign;
			/**
			 * Alias for OUTSIDE_ALIGNMENT. The stroke is outside the path, 
			 * like a picture frame.
			 * @type {Adobe.Incopy.TextStrokeAlign}
			 * @readonly
			 */
			public static readonly outsideAlignment: Adobe.Incopy.TextStrokeAlign;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}
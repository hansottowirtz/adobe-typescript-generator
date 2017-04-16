/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class TextStrokeAlign extends Adobe.Csawlib.CSEnumBase {
			/**
			 * The stroke straddles the path.
			 * @type {Adobe.Indesign.TextStrokeAlign}
			 * @readonly
			 */
			public static readonly CENTER_ALIGNMENT: Adobe.Indesign.TextStrokeAlign;
			/**
			 * Alias for CENTER_ALIGNMENT. The stroke straddles the path.
			 * @type {Adobe.Indesign.TextStrokeAlign}
			 * @readonly
			 */
			public static readonly centerAlignment: Adobe.Indesign.TextStrokeAlign;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * The stroke is outside the path, like a picture frame.
			 * @type {Adobe.Indesign.TextStrokeAlign}
			 * @readonly
			 */
			public static readonly OUTSIDE_ALIGNMENT: Adobe.Indesign.TextStrokeAlign;
			/**
			 * Alias for OUTSIDE_ALIGNMENT. The stroke is outside the path, 
			 * like a picture frame.
			 * @type {Adobe.Indesign.TextStrokeAlign}
			 * @readonly
			 */
			public static readonly outsideAlignment: Adobe.Indesign.TextStrokeAlign;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}
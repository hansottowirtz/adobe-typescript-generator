/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ContentType extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * The frame is a graphics frame.
			 * @type {Adobe.Indesign.ContentType}
			 * @readonly
			 */
			public static readonly GRAPHIC_TYPE: Adobe.Indesign.ContentType;
			/**
			 * Alias for GRAPHIC_TYPE. The frame is a graphics frame.
			 * @type {Adobe.Indesign.ContentType}
			 * @readonly
			 */
			public static readonly graphicType: Adobe.Indesign.ContentType;
			/**
			 * The frame is a text frame.
			 * @type {Adobe.Indesign.ContentType}
			 * @readonly
			 */
			public static readonly TEXT_TYPE: Adobe.Indesign.ContentType;
			/**
			 * Alias for TEXT_TYPE. The frame is a text frame.
			 * @type {Adobe.Indesign.ContentType}
			 * @readonly
			 */
			public static readonly textType: Adobe.Indesign.ContentType;
			/**
			 * Alias for UNASSIGNED. No content type assigned.
			 * @type {Adobe.Indesign.ContentType}
			 * @readonly
			 */
			public static readonly unassigned: Adobe.Indesign.ContentType;
			/**
			 * No content type assigned.
			 * @type {Adobe.Indesign.ContentType}
			 * @readonly
			 */
			public static readonly UNASSIGNED: Adobe.Indesign.ContentType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}
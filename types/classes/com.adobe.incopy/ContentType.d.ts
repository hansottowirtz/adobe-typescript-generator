/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ContentType extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * The frame is a graphics frame.
			 * @type {Adobe.Incopy.ContentType}
			 * @readonly
			 */
			public static readonly GRAPHIC_TYPE: Adobe.Incopy.ContentType;
			/**
			 * Alias for GRAPHIC_TYPE. The frame is a graphics frame.
			 * @type {Adobe.Incopy.ContentType}
			 * @readonly
			 */
			public static readonly graphicType: Adobe.Incopy.ContentType;
			/**
			 * The frame is a text frame.
			 * @type {Adobe.Incopy.ContentType}
			 * @readonly
			 */
			public static readonly TEXT_TYPE: Adobe.Incopy.ContentType;
			/**
			 * Alias for TEXT_TYPE. The frame is a text frame.
			 * @type {Adobe.Incopy.ContentType}
			 * @readonly
			 */
			public static readonly textType: Adobe.Incopy.ContentType;
			/**
			 * Alias for UNASSIGNED. No content type assigned.
			 * @type {Adobe.Incopy.ContentType}
			 * @readonly
			 */
			public static readonly unassigned: Adobe.Incopy.ContentType;
			/**
			 * No content type assigned.
			 * @type {Adobe.Incopy.ContentType}
			 * @readonly
			 */
			public static readonly UNASSIGNED: Adobe.Incopy.ContentType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}
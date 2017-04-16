/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ObjectTypes extends Adobe.Csawlib.CSEnumBase {
			/**
			 * All frame types.
			 * @type {Adobe.Indesign.ObjectTypes}
			 * @readonly
			 */
			public static readonly ALL_FRAMES_TYPE: Adobe.Indesign.ObjectTypes;
			/**
			 * Alias for ALL_FRAMES_TYPE. All frame types.
			 * @type {Adobe.Indesign.ObjectTypes}
			 * @readonly
			 */
			public static readonly allFramesType: Adobe.Indesign.ObjectTypes;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Graphics frame.
			 * @type {Adobe.Indesign.ObjectTypes}
			 * @readonly
			 */
			public static readonly GRAPHIC_FRAMES_TYPE: Adobe.Indesign.ObjectTypes;
			/**
			 * Alias for GRAPHIC_FRAMES_TYPE. Graphics frame.
			 * @type {Adobe.Indesign.ObjectTypes}
			 * @readonly
			 */
			public static readonly graphicFramesType: Adobe.Indesign.ObjectTypes;
			/**
			 * Text frame.
			 * @type {Adobe.Indesign.ObjectTypes}
			 * @readonly
			 */
			public static readonly TEXT_FRAMES_TYPE: Adobe.Indesign.ObjectTypes;
			/**
			 * Alias for TEXT_FRAMES_TYPE. Text frame.
			 * @type {Adobe.Indesign.ObjectTypes}
			 * @readonly
			 */
			public static readonly textFramesType: Adobe.Indesign.ObjectTypes;
			/**
			 * Unassigned frame.
			 * @type {Adobe.Indesign.ObjectTypes}
			 * @readonly
			 */
			public static readonly UNASSIGNED_FRAMES_TYPE: Adobe.Indesign.ObjectTypes;
			/**
			 * Alias for UNASSIGNED_FRAMES_TYPE. Unassigned frame.
			 * @type {Adobe.Indesign.ObjectTypes}
			 * @readonly
			 */
			public static readonly unassignedFramesType: Adobe.Indesign.ObjectTypes;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}
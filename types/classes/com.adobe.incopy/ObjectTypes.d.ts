/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ObjectTypes extends Adobe.Csawlib.CSEnumBase {
			/**
			 * All frame types.
			 * @type {Adobe.Incopy.ObjectTypes}
			 * @readonly
			 */
			public static readonly ALL_FRAMES_TYPE: Adobe.Incopy.ObjectTypes;
			/**
			 * Alias for ALL_FRAMES_TYPE. All frame types.
			 * @type {Adobe.Incopy.ObjectTypes}
			 * @readonly
			 */
			public static readonly allFramesType: Adobe.Incopy.ObjectTypes;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Graphics frame.
			 * @type {Adobe.Incopy.ObjectTypes}
			 * @readonly
			 */
			public static readonly GRAPHIC_FRAMES_TYPE: Adobe.Incopy.ObjectTypes;
			/**
			 * Alias for GRAPHIC_FRAMES_TYPE. Graphics frame.
			 * @type {Adobe.Incopy.ObjectTypes}
			 * @readonly
			 */
			public static readonly graphicFramesType: Adobe.Incopy.ObjectTypes;
			/**
			 * Text frame.
			 * @type {Adobe.Incopy.ObjectTypes}
			 * @readonly
			 */
			public static readonly TEXT_FRAMES_TYPE: Adobe.Incopy.ObjectTypes;
			/**
			 * Alias for TEXT_FRAMES_TYPE. Text frame.
			 * @type {Adobe.Incopy.ObjectTypes}
			 * @readonly
			 */
			public static readonly textFramesType: Adobe.Incopy.ObjectTypes;
			/**
			 * Unassigned frame.
			 * @type {Adobe.Incopy.ObjectTypes}
			 * @readonly
			 */
			public static readonly UNASSIGNED_FRAMES_TYPE: Adobe.Incopy.ObjectTypes;
			/**
			 * Alias for UNASSIGNED_FRAMES_TYPE. Unassigned frame.
			 * @type {Adobe.Incopy.ObjectTypes}
			 * @readonly
			 */
			public static readonly unassignedFramesType: Adobe.Incopy.ObjectTypes;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}
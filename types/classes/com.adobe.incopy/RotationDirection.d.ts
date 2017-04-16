/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class RotationDirection extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for BACKWARD. Rotate the list backward (i.e., move 
			 * backmost item to front)
			 * @type {Adobe.Incopy.RotationDirection}
			 * @readonly
			 */
			public static readonly backward: Adobe.Incopy.RotationDirection;
			/**
			 * Rotate the list backward (i.e., move backmost item to front)
			 * @type {Adobe.Incopy.RotationDirection}
			 * @readonly
			 */
			public static readonly BACKWARD: Adobe.Incopy.RotationDirection;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for FORWARD. Rotate the list forward (i.e., move the 
			 * front item to end)
			 * @type {Adobe.Incopy.RotationDirection}
			 * @readonly
			 */
			public static readonly forward: Adobe.Incopy.RotationDirection;
			/**
			 * Rotate the list forward (i.e., move the front item to end)
			 * @type {Adobe.Incopy.RotationDirection}
			 * @readonly
			 */
			public static readonly FORWARD: Adobe.Incopy.RotationDirection;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}
/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class RotationDirection extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for BACKWARD. Rotate the list backward (i.e., move 
			 * backmost item to front)
			 */
			public static readonly backward: Adobe.Indesign.RotationDirection;
			/**
			 * Rotate the list backward (i.e., move backmost item to front)
			 */
			public static readonly BACKWARD: Adobe.Indesign.RotationDirection;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for FORWARD. Rotate the list forward (i.e., move the 
			 * front item to end)
			 */
			public static readonly forward: Adobe.Indesign.RotationDirection;
			/** Rotate the list forward (i.e., move the front item to end) */
			public static readonly FORWARD: Adobe.Indesign.RotationDirection;
			/** Constructor */
			public constructor();
		}
	}
}
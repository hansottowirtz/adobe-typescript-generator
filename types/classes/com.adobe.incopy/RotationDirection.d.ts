/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class RotationDirection extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for BACKWARD. Rotate the list backward (i.e., move 
			 * backmost item to front)
			 */
			public static readonly backward: Adobe.Incopy.RotationDirection;
			/**
			 * Rotate the list backward (i.e., move backmost item to front)
			 */
			public static readonly BACKWARD: Adobe.Incopy.RotationDirection;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for FORWARD. Rotate the list forward (i.e., move the 
			 * front item to end)
			 */
			public static readonly forward: Adobe.Incopy.RotationDirection;
			/** Rotate the list forward (i.e., move the front item to end) */
			public static readonly FORWARD: Adobe.Incopy.RotationDirection;
			/** Constructor */
			public constructor();
		}
	}
}
/// <reference path="../../packages/com.adobe.premiere/index.d.ts"/>

declare namespace Adobe {
	namespace Premiere {
		class Track extends Adobe.Csawlib.CSHostObject {
			public readonly clips: Adobe.Premiere.TrackItemCollection;
			public readonly id: number;
			public readonly mediaType: string;
			public readonly transitions: Adobe.Premiere.TrackItemCollection;
		}
	}
}
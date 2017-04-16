/// <reference path="../../packages/com.adobe.premiere/index.d.ts"/>

declare namespace Adobe {
	namespace Premiere {
		class TrackItem extends Adobe.Csawlib.CSHostObject {
			public readonly duration: Adobe.Premiere.Time;
			public readonly end: Adobe.Premiere.Time;
			public readonly mediaType: string;
			public readonly start: Adobe.Premiere.Time;
			public readonly type: number;
		}
	}
}
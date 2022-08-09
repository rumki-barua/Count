import Video from './videos.component';
class Videos {
    render() {
        return () {
            <>
            {
                this.state.videos.map((video,index) => 
                 return (
                    <Video

                    content={content}
                    />
                 )
                 )
            }
            </>
        }
    }
}
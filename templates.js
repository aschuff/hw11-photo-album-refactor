var photoPageTmpl =  {
  albumCoversTmpl:  `<div class="album" data-id= <%=id%>>
                  <img src= "<%=cover%>" alt="">
                  <h3> <%=title%> </h3>
                  </div>

`,
  picturesInAlbumTmpl: `
                  <div class="photo">
                  <img src= "<%=photo%>" alt="">
                  <h3> <%=caption%> </h3>
                  </div>

  `
}
